import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contacts/contacts';
import { AddPage } from '../contacts/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ContactPage;
  tab2Root = AddPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
