import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage} from '../tabs/tabs';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  document_types: Array<any>=[
    {id: 1, description:'Cédula de Ciudadanía'},
    {id: 2, description:'Cédula de Extranjería'},
    {id: 3, description:'Pasaporte'},
    {id: 4, description:'Tarjeta de Identidad'}
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  save()
  {
    this.navCtrl.push(TabsPage);
  }

}
