/*
 *  App developed for the mid-term exam in "Introduction to Mobile App
 *  Design and Development" course @Laurea.
 *  Author: Patricia Vera Hernández
 *  Student number: 1106727
 */

import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';

// Imports to use the InAppBrowser plugin
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})

export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private InAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  /*
   *  Alert containing both university
   *  email and personal email
   */
  showEmail() {
    let alert = this.alertCtrl.create({
      title: 'E-mail',
      subTitle: 'Student email: patricia.vera.hernandez@student.laurea.com || Personal email: p.vhernandez@hotmail.com',
      buttons: ['OK']
    });

    alert.present();
  }

  /*
   *  Alert containing my phone number
   *  (it is not actually written already)
   */
  showPhone() {
    let alert = this.alertCtrl.create({
      title: 'Phone number',
      subTitle: 'You can contact me by sending a message/calling: +34 xxx xx xx xx',
      buttons: ['OK']
    });

    alert.present();
  }

  /*
   *  Function that allows the web app to open
   *  a new tab in the system browser to the link
   *  that has been given
   */
  openWebPage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    // Opens an URL and returns an InAppBrowserObject
    // _system -> in order to open the web page with the system's web browser
    const browser = this.InAppBrowser.create(url, '_system', options);
  }
}
