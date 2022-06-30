import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { ModalContentPage } from '../../pages/contacts/modal-contact';
import { ModalEditContentPage } from '../../pages/contacts/modal-edit';

@Component({
  selector: 'page-contact',
  templateUrl: 'contacts.html'
})
export class ContactPage implements OnInit {
  contacts: Contacts[];
  contact: Contacts;
  show: boolean;

  constructor(public navCtrl: NavController, 
              private dataService: DataService, 
              public loadingCtrl: LoadingController,
              public modalCtrl: ModalController) { }


  ngOnInit() {

     let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 2000
      });
      loader.present();

      this.getAllContacts();
  }

  getAllContacts() {
    this.dataService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  openModal(contact) {
      let modal = this.modalCtrl.create(ModalContentPage, contact);
      modal.present();
  }

  openEditModal(contact) {
      let modal = this.modalCtrl.create(ModalEditContentPage, contact);
      modal.onDidDismiss(() => {
           this.getAllContacts();
      });
      modal.present();
  }

  searchContacts(ev) {

    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.contacts = this.contacts.filter((contact) => {
        if(contact['name'] != null || contact['number'] != null) {
          return (contact['name'].toLowerCase().indexOf(val.toLowerCase()) > -1 || contact['number'].indexOf(val) > -1)
        };
      })
    } else {
      this.getAllContacts();
    }
  }

}

  interface Contacts {
    id: number,
    userId: number,
    title: string,
    body: string
  }