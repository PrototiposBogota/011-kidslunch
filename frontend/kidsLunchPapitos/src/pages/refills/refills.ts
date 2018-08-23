import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';

/**
 * Generated class for the RefillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-refills',
  templateUrl: 'refills.html',
})
export class RefillsPage {
  titular: Array<any>=[{name:"Ana Maria",balance:300000.0}]

  beneficiaries: Array<any>=
  [
    {
      name:"Maria Elena",
      photo:"ma_elena.jpg",
      school:"Liceo Julio Cesar Garcia",
      balance:100000.0
    },
    {
      name:"Sebastian",
      photo:"sebastian.gif",
      school:"Hogar de la Niña Veracruz",
      balance:100000.0
    },
    {
      name:"Anita",
      photo:"anita.gif",
      school:"Colegio Jorge Soto del Corral",
      balance:100000.0
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RefillsPage');
  }
  refill()
  {
    alert("Recarga Exitosa");
    this.navCtrl.push(HomePage);
  }

}
