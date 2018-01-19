import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { ChatPageModule } from '../pages/chat/chat.module';

var config = {
  apiKey: "AIzaSyAX-B7357-JWaUM5ENNFJWaj75P-gldmsM",
  authDomain: "ionic-chat-starter-9b493.firebaseapp.com",
  databaseURL: "https://ionic-chat-starter-9b493.firebaseio.com",
  projectId: "ionic-chat-starter-9b493",
  storageBucket: "ionic-chat-starter-9b493.appspot.com",
  messagingSenderId: "715916040512"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    ChatPageModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    //StatusBar,
    //SplashScreen,
    
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
