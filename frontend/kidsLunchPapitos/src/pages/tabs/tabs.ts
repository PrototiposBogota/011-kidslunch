import { Component } from '@angular/core';

import { RefillsPage } from '../refills/refills';
import { OrderPage } from '../order/order';
import { HomePage } from '../home/home';
import { HistoricalPage} from '../historical/historical';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RefillsPage;
  tab3Root = OrderPage;
  tab4Root = HistoricalPage;

  constructor() {

  }
}
