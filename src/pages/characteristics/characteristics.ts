import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Size } from '../menuitem';
import { VideosPage } from '../index.pages';

@Component({
  selector: 'page-characteristics',
  templateUrl: 'characteristics.html',
})
export class CharacteristicsPage {
  item: any;
  name: string;
  price: string;
  array_name: string;
  size: string;
  image: string;
  images = [];
  milk: string = "Ninguna";
  sweetener: string = "Ninguno";
  other: string = "Caliente";
  other_sodas: string = "Fría";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get("item");
    this.name = this.item.name;
    this.price = this.item.price;
    this.array_name = this.item.array_name;
    this.size = this.item.size;
    console.log('Item:' + JSON.stringify(this.item));

    switch (this.array_name) {
      case "coffees":
      case "others":
      case "teas":
        this.images.push("././assets/imgs/CalienteS.jpg");
        this.images.push("././assets/imgs/CalienteM.jpg");
        this.images.push("././assets/imgs/CalienteL.jpg");
        break;
      case "cold_drinks":
        this.images.push("././assets/imgs/FriaS.jpg");
        this.images.push("././assets/imgs/FriaM.jpg");
        this.images.push("././assets/imgs/FriaL.jpg");
        break;
      case "sodas":
        this.image = "././assets/imgs/Lata.jpg";
        break;
    }

    switch (this.size) {
      case "small":
        this.image = this.images[0];
        break;
      case "medium":
        this.image = this.images[1];
        break;
      case "large":
        this.image = this.images[2];
        break;
    }
    console.log("Image:" + this.image);
  }

  previousPage() {
    this.navCtrl.pop();
  }

  nextPage() {
    this.navCtrl.push(VideosPage, {
      name: this.name,
      price: this.price,
      size: this.size,
      image: this.image,
      milk: this.milk,
      sweetener: this.sweetener,
      other: this.other,
      array_name: this.array_name,
      other_sodas: this.other_sodas
    });
  }

}
