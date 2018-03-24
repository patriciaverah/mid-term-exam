/*
 *  App developed for the mid-term exam in "Introduction to Mobile App
 *  Design and Development" course @Laurea.
 *  Author: Patricia Vera Hernández
 *  Student number: 1106727
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-additional',
  templateUrl: 'additional.html',
})

export class AdditionalPage {

  additional: string = "competences";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditionalPage');
  }

}
