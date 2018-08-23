import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the BeneficiaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beneficiary',
  templateUrl: 'beneficiary.html',
})
export class BeneficiaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeneficiaryPage');
  }
  back()
  {
    this.navCtrl.push(HomePage);
  }
  addBeneficiary()
  {
    alert("Agregado exitosamente");
    this.navCtrl.push(HomePage);
  }



}
