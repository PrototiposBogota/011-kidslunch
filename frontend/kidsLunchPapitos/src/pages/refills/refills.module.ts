import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RefillsPage } from './refills';

@NgModule({
  declarations: [
    RefillsPage,
  ],
  imports: [
    IonicPageModule.forChild(RefillsPage),
  ],
})
export class RefillsPageModule {}
