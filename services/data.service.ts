import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(public http: Http, public toastCtrl: ToastController) {
    console.log('Its a Data Service');
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  getContacts() {
    return this.http
      .get('https://rahul.gdiz.org/ci/phonebook?resType=json')
      .map((res) => res.json());
  }

  getContact($id) {
    return this.http
      .get('https://rahul.gdiz.org/ci/phonebook/' + $id + '?resType=json')
      .map((res) => res.json());
  }

  saveContact(data) {
    this.http
      .post('https://rahul.gdiz.org/ci/phonebook/save?resType=json', data)
      .subscribe((res) => this.showToast(res['_body']));
  }

  updateContact(data) {
    this.http
      .post(
        'https://rahul.gdiz.org/ci/phonebook/edit/' + data.id + '?resType=json',
        data
      )
      .subscribe((res) => this.showToast(res['_body']));
  }
}
