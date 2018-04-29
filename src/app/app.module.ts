/*
 *  App developed for the mid-term exam in "Introduction to Mobile App
 *  Design and Development" course @Laurea.
 *  Author: Patricia Vera Hernández
 *  Student number: 1106727
 */

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { FirebaseProvider } from '../providers/firebase/firebase';

// Angular firebase database imports
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// InAppBrowser plugin import
import { InAppBrowser } from '@ionic-native/in-app-browser';

const firebaseConfig = {
  apiKey: "AIzaSyAPZJ_UTHJUTa9FTHQ4WbnJXC3M5WiSu2I",
  authDomain: "exam-cv.firebaseapp.com",
  databaseURL: "https://exam-cv.firebaseio.com",
  projectId: "exam-cv",
  storageBucket: "exam-cv.appspot.com",
  messagingSenderId: "1060450752874"
}

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    WelcomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    WelcomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    InAppBrowser
  ]
})

export class AppModule {}
