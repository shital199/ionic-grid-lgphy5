import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: `modal-edit.html`
})
export class ModalEditContentPage {
  contacts: Contacts[];
  contact: Contacts;
  angForm: FormGroup;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private dataService: DataService,
              private fb: FormBuilder ) {
                
    this.updateForm();

    this.contact = this.params.get('data');

    this.dataService.getContact(this.contact.id).subscribe((contact) => {
      this.contact = contact;
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  updateForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required]
    })
  }


  updateContact(name, number) {
    let data = {
      id: this.contact.id,
      name: name,
      number: number
    };
    let res = this.dataService.updateContact(data);
    this.dismiss();
  }

}

  interface Contacts {
    id: number,
    userId: number,
    title: string,
    body: string
  }