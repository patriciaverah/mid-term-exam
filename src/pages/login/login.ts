/*
 *  App developed for the mid-term exam in "Introduction to Mobile App
 *  Design and Development" course @Laurea.
 *  Author: Patricia Vera Hernández
 *  Student number: 1106727
 */

import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AngularFireAuth } from 'angularfire2/auth';

import { MenuPage } from '../menu/menu';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(private fire: AngularFireAuth, private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

  }

  // Goes to Register page
  public createAccount() {
    this.nav.push('RegisterPage');
  }

  // User trying to log in
  // Look for matching credentials in the database
  // We are not allowing usernames - only emails!
  public login() {
    this.showLoading();
    this.fire.auth.signInWithEmailAndPassword(this.registerCredentials.email, this.registerCredentials.password)
    .then(data => {
      console.log('got some data ', data);
      // user is logged in
      // User accessed the app
      this.showSuccess('You are now logged in!');
      this.nav.setRoot(MenuPage);
    })
    .catch(error => {
      console.log('got an error ', error);
      // not logged in
      // There was an error in the process
      this.showError(error);
    })
  }

  // Loading code
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });

    this.loading.present();
  }

  // Pop-up in case of error
  showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });

    alert.present();
  }

  // Pop-up in case of success
  showSuccess(text) {
    let alert = this.alertCtrl.create({
      title: 'Well done!',
      subTitle: text,
      buttons: ['OK']
    });

    alert.present();
  }
}
