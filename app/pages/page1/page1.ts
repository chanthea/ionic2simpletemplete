import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {SearchPage} from "../search/search";

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  pet: string = "puppies";

  constructor(private nav:NavController){}
  Search(){
    this.nav.push(SearchPage);
  }
}
