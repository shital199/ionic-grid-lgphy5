import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contacts/contacts';
import { AddPage } from '../pages/contacts/add';
import { TabsPage } from '../pages/tabs/tabs';

import { DataService } from '../services/data.service';

import { ModalContentPage } from '../pages/contacts/modal-contact';
import { ModalEditContentPage } from '../pages/contacts/modal-edit';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    AddPage,
    TabsPage,
    ModalContentPage,
    ModalEditContentPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Go Back',
      iconMode: 'md',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'md-transition',
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    AddPage,
    TabsPage,
    ModalContentPage,
    ModalEditContentPage,
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataService,
  ],
})
export class AppModule {}
