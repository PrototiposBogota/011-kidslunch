import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RefillsPage } from '../pages/refills/refills';
import { OrderPage } from '../pages/order/order';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { YoutubePage} from '../pages/youtube/youtube';
import { LoginPage} from '../pages/login/login';
import { HistoricalPage} from '../pages/historical/historical';
import { RegisterPage} from '../pages/register/register';
import { BeneficiaryPage } from '../pages/beneficiary/beneficiary';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    RefillsPage,
    OrderPage,
    HomePage,
    TabsPage,
    YoutubePage,
    LoginPage,
    HistoricalPage,
    RegisterPage,
    BeneficiaryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RefillsPage,
    OrderPage,
    HomePage,
    TabsPage,
    YoutubePage,
    LoginPage,
    HistoricalPage,
    RegisterPage,
    BeneficiaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  

}
