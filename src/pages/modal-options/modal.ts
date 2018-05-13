import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Size } from '../menuitem';

@IonicPage()
@Component({
  selector: 'page-modal-options',
  templateUrl: 'modal.html',
})
export class ModalOptions {
  item: any;
  name: String;
  price_s: number;
  price_m: number;
  price_l: number;
  size: Size

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('item')
    this.name = this.item.name;
    this.price_s = this.item.price_s;
    this.price_m = this.item.price_m;
    this.price_l = this.item.price_l;
    console.log("item.name:" + this.name);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
  selectOption(price: String, size: Size) {
    
  }
}
