import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DataFinder } from "../../providers/index.providers";
import { MenuItem } from '../menuitem';
import { ModalInventory } from "../modal-inventory/modal";

/**
 * Generated class for the InventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {
  selectedItem: MenuItem;
  coffees = [];
  teas = [];
  others = [];

  constructor(private datafinder: DataFinder,
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
    }

    for (let i in currentItems) {
      if (currentItems[i].id == id) {
        this.selectedItem = new MenuItem(currentItems[i].id, currentItems[i].name, currentItems[i].price_s, currentItems[i].price_m, currentItems[i].price_l);
        //console.log("Passed Item:" + JSON.stringify(this.selectedItem));
      }
    }
    var MyItem = {
      id: id,
      name: arrayName
    }
    //let myModal = this.modal.create(ModalInventory, {item: MyItem});
    let myModal = this.modal.create(ModalInventory, {item:this.selectedItem});
    myModal.present();

    myModal.onDidDismiss((item) => {
      console.log("My returned data: "+item);
    });
  }

}