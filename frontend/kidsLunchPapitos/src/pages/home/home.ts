import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { BeneficiaryPage } from '../beneficiary/beneficiary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
    
  }
  logout()
  {
    this.navCtrl.push(LoginPage);
  }
  addBeneficiary()
  {
    this.presentProfileModal();
  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(BeneficiaryPage);
    profileModal.present();
  }
}