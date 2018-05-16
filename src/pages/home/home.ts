import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DataFinder } from "../../providers/index.providers";
import { MenuItem } from '../menuitem';
import { ModalOptions } from "../index.pages";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedItem: MenuItem;
  coffees = [];
  teas = [];
  cold_drinks = [];
  others = [];
  sodas = [];

  constructor(private datafinder: DataFinder, public navCtrl: NavController,
    public modal: ModalController) {

  }

  ionViewDidLoad() {
    this.datafinder.getJSONDataAsync().subscribe(data => {
      this.setMenuItemsData(data);
    });
  }


  setMenuItemsData(data: any) {
    this.coffees = data.coffees;
    this.teas = data.teas;
    this.others = data.others;
    this.cold_drinks = data.cold_drinks;
    this.sodas = data.sodas;
  }

  openModal(id: Number, arrayName: String) {
    console.log("Array: " + arrayName);
    console.log("Id: " + id);
    var currentItems = [];

    switch (arrayName) {
      case "coffees":
        currentItems = this.coffees;
        break;
      case "teas":
        currentItems = this.teas;
        break;
      case "others":
        currentItems = this.others;
        break;
      case "cold_drinks":
        currentItems = this.cold_drinks;
        break;
      case "sodas":
        currentItems = this.sodas;
        break;
    }

    for (let i in currentItems) {
      if (currentItems[i].id == id) {
        this.selectedItem = new MenuItem(currentItems[i].id, currentItems[i].name, currentItems[i].price_s, currentItems[i].price_m, currentItems[i].price_l);
      }
    }
    var MyItem = {
      id: id,
      array_name: arrayName,
      name: this.selectedItem.name,
      price_s: this.selectedItem.price_s,
      price_m: this.selectedItem.price_m,
      price_l: this.selectedItem.price_l
    }
  
    let myModal = this.modal.create(ModalOptions, { item: MyItem });
    myModal.present();

    myModal.onDidDismiss((item) => {
      console.log("My returned data: " + item);
    });
  }
  openCharacteristics(){
    console.log("OpenCharcteristics");
  }

}
