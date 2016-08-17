import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';
import {SlidePage} from "./pages/slide/slide";
import {AlertController} from "ionic-angular";

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SlidePage;

  pages: Array<{title: string, component: any, icon : any}>;
 midnavs: Array<{title: string, component: any, icon : any}>;
    testRadioOpen: boolean;
    testRadioResult;

  constructor(public platform: Platform, public alertController : AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Page1, icon : 'home' },
      { title: 'Contact', component: Page2, icon : 'contact' }
    ];

    this.midnavs = [
      { title: 'Bookmark', component: Page1, icon : 'bookmark' },
      { title: 'Other', component: Page2, icon : 'book' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  doAlert(){
      let alert = this.alertController.create();
      alert.setTitle('Lightsaber color');

      alert.addInput({
          type: 'radio',
          label: 'Blue',
          value: 'blue',
          checked: true
      });
      alert.addInput({
          type: 'radio',
          label: 'White',
          value: 'white'
      });

      alert.addInput({
          type: 'radio',
          label: 'Black',
          value: 'black'
      });

      alert.addButton('Cancel');
      alert.addButton({
          text: 'OK',
          handler: data => {
              this.testRadioOpen = false;
              this.testRadioResult = data;
          }
      });
      alert.present();
  }
}

ionicBootstrap(MyApp);
