import { ChatPage } from './../pages/chat/chat';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'

import { HomePage } from '../pages/home/home';
  const firebase = {
    apiKey: "AIzaSyBmJg3uArLky4538z2pVanpVTgRQ9-vLsA",
    authDomain: "test-project-347aa.firebaseapp.com",
    databaseURL: "https://test-project-347aa.firebaseio.com",
    projectId: "test-project-347aa",
    storageBucket: "test-project-347aa.appspot.com",
    messagingSenderId: "624170437268"
  };

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
            AngularFireModule.initializeApp(firebase),
            AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
