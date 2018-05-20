import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Size } from '../menuitem';
import { CharacteristicsPage } from '../index.pages';

@Component({
  selector: 'page-modal-options',
  templateUrl: 'modal.html',
})
export class ModalOptions {
  item: any;
  name: string;
  arrayName: string;
  price_s: string;
  price_m: string;
  price_l: string;
  image_l: string;
  image_m: string;
  image_s: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('item')
    this.arrayName = this.item.array_name
    this.name = this.item.name;
    this.price_s = this.item.price_s;
    this.price_m = this.item.price_m;
    this.price_l = this.item.price_l;
    console.log("item.name:" + this.name);

    switch (this.arrayName) {
      case "coffees":
      case "others":
      case "teas":
        this.image_s = "././assets/imgs/CalienteS.jpg";
        this.image_m = "././assets/imgs/CalienteM.jpg";
        this.image_l = "././assets/imgs/CalienteL.jpg";
        console.log("Image_s: "+this.image_s);
        break;
      case "cold_drinks":
        this.image_s = "././assets/imgs/FriaS.jpg";
        this.image_m = "././assets/imgs/FriaM.jpg";
        this.image_l = "././assets/imgs/FriaL.jpg";
        break;
    }
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  selectOption(name: string,array_name: string, price: string, size: string) {
    var MyItem = {
      array_name: array_name,
      name: name,
      price: price,
      size: size
    }
    this.navCtrl.push(CharacteristicsPage,{'item': MyItem});
  }
}
