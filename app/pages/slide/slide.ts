import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {Page1} from "../page1/page1";

/*
  Generated class for the SlidePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/slide/slide.html',
})
export class SlidePage {

  constructor(private nav: NavController, private loading : LoadingController) {}
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "build/images/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "build/images/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "build/images/ica-slidebox-img-3.png",
    }
  ];

  GoTo() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(Page1);
    let loader = this.loading.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }
}
