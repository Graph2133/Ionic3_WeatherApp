import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { ToastController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
 public city: string;
 public country: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController) {

   

  }
  saveForm() {
    let location = {
      city: this.city,
      country: this.country
    }
    this.storage.set('location', JSON.stringify(location));
    let toast = this.toastCtrl.create({
      message: 'Changes was saved succesfully',
      duration: 3000,
      position:'top'
    });
    toast.present();
  }
  ionViewWillEnter() {
     this.storage.get('location').then(res => {
      if (res != null) {
        let location = JSON.parse(res);
        this.city = location.city;
        this.country = location.country;
      } else {
        this.city = 'Lviv';
        this.country = 'Ukraine';
      }
    })
  }


}
