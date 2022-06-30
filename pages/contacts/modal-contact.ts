import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { DataService } from '../../services/data.service';


@Component({
  templateUrl: `modal-contact.html`
})
export class ModalContentPage {
  contacts: Contacts[];
  contact: Contacts;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private dataService: DataService
  ) {

    this.contact = this.params.get('data');

    this.dataService.getContact(this.contact.id).subscribe((contact) => {
      this.contact = contact;
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

  interface Contacts {
    id: number,
    userId: number,
    title: string,
    body: string
  }