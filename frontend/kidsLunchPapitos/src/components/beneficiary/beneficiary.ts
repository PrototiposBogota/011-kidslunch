import { Component } from '@angular/core';

/**
 * Generated class for the BeneficiaryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'beneficiary',
  templateUrl: 'beneficiary.html'
})
export class BeneficiaryComponent {

  text: string;

  constructor() {
    console.log('Hello BeneficiaryComponent Component');
    this.text = 'Hello World';
  }

}
