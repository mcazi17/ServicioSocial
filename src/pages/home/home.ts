import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DataFinder } from "../../providers/index.providers";
import { MenuItem } from '../menuitem';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedItem: MenuItem;
  coffees = [];
  teas = [];
  others = [];

  constructor(private datafinder: DataFinder, public navCtrl: NavController) {

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

  fixCardHeight(){
    

  }

}
