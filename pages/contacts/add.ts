import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'contact-add',
  templateUrl: 'add.html'
})
export class AddPage implements OnInit {

  angForm: FormGroup;

  constructor(public navCtrl: NavController,
              private dataService: DataService,
              private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  addContact(name, number) {
    let data = {
      name: name,
      number: number
    };
    console.log(data);
    let response = this.dataService.saveContact(data);
    console.log(response);
  }

}
