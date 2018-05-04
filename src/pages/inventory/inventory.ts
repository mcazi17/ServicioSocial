import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
  teas= [];
  others= [];

  constructor( private datafinder:DataFinder) {
  }

  ionViewDidLoad() {
    this.datafinder.getJSONDataAsync().subscribe(data => {
      this.setMenuItemsData(data);
    });
  }
  

  setMenuItemsData(data: any){
    this.coffees = data.coffees;  
    this.teas = data.teas;
    this.others = data.others;

    console.log("Coffes array: "+ this.coffees[0].priceSmall );    
    console.log("Coffes array: "+ JSON.stringify(this.coffees) );
    console.log("Teas array: "+JSON.stringify(this.teas));
    console.log("Others array: "+JSON.stringify(this.others));
  }

  onClickItem(item){
    this.selectedItem = item;
  }

}