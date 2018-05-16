import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InventoryPage } from '../../pages/inventory/inventory';

/**
 * Generated class for the InventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})

export class SlidesPage {
  
  constructor(public navCtrl: NavController) {
  }

  closeSlides(){
    console.log("Close slides");
    this.navCtrl.popTo(InventoryPage);
  }
}