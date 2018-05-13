import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { MenuItem } from '../menuitem';
import { DataFinder } from "../../providers/index.providers";

@IonicPage()
@Component({
  selector: 'page-modal-inventory',
  templateUrl: 'modal.html',
})
export class ModalInventory {
  item: any;
  name: String;
  price_s: number;
  price_m: number;
  price_l: number;
  constructor(private datafinder: DataFinder, public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('item')
    this.name = this.item.name;
    this.price_s = this.item.price_s;
    this.price_m = this.item.price_m;
    this.price_l = this.item.price_l;
    console.log("item.name:"+this.name);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  public onUpdateData() {
    console.log("OnUpdateData");
  }

  public showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Actualización de datos',
      message: '¿Quieres actulizar los datos de este producto? ',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Actualizar',
          handler: () => {
            console.log('Agree clicked');

          }
        }
      ]
    });
    confirm.present();
  }

}
