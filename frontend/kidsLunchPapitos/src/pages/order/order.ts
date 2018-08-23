import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
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

  inventories: Array<any>=
  [
    {id:1,
    name:"Compota",
    price:1500},
    {id:1,
    name:"Galletas",
    price:500},
    
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

}
