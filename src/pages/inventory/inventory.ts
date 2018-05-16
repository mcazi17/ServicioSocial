import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DataFinder } from "../../providers/index.providers";
import { MenuItem } from '../menuitem';

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
  cold_drinks = [];
  others = [];
  sodas = [];
  
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
    this.cold_drinks = data.cold_drinks;
    this.others = data.others;
    this.sodas = data.sodas;
  }
}