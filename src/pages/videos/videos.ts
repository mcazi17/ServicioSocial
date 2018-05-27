import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

  item: any;
  name: string;
  price: string;
  size: string;
  image: string;
  milk: string;
  sweetener: string;
  other: string;
  other_sodas: string;
  video: string;
  title: string;
  array_name: string;
  isSize: boolean;
  isSweet: boolean;
  isMilk: boolean;
  isOther: boolean;
  isOtherSodas: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ionViewDidLoad();
    this.showCharacteristics();
    this.findVideo();
  }

  ionViewDidLoad() {
    this.name = this.navParams.get("name");
    this.price = this.navParams.get("price");
    this.image = this.navParams.get("image");
    this.size = this.navParams.get("size");
    this.milk = this.navParams.get("milk");
    this.sweetener = this.navParams.get("sweetener");
    this.other = this.navParams.get("other");
    this.array_name = this.navParams.get("array_name");
    this.other_sodas = this.navParams.get("other_sodas");
    this.showCharacteristics();
    this.findVideo();
  }

  showCharacteristics() {
    switch (this.array_name) {
      case "coffees":
      case "others":
      case "teas":
        this.isSize = true;
        this.isSweet = true;
        this.isMilk = true;
        this.isOther = true;
        this.isOtherSodas = false;
        break;
      case "cold_drinks":
        this.other = "Frío"
        this.isSize = true;
        this.isSweet = false;
        this.isMilk = true;
        this.isOther = false;
        this.isOtherSodas = false;
        break;
      case "sodas":
        this.isSize = false;
        this.isSweet = false;
        this.isMilk = false;
        this.isOther = false;
        this.isOtherSodas = true;
        break;
    }
  }

  findVideo() {
    switch (this.name) {
      case "Americano":
        this.video = "././assets/gifs/cafe_americano.gif"
        console.log("Video: ", this.video)
        break;
      case "Cappucino":
        this.video = "././assets/gifs/cafe_cappuccino.gif"
        console.log("Video: ", this.video)
        break;
      case "Latte":
        this.video = "././assets/gifs/cafe_latte.gif"
        console.log("Video: ", this.video)
        break;
      case "Mocha":
        this.video = "././assets/gifs/cafe_mocha.gif"
        console.log("Video: ", this.video)
        break;
      case "Espresso":
        this.video = "././assets/gifs/cafe_espresso.gif"
        console.log("Video: ", this.video)
        break;
      case "Chocolate caliente":
        this.video = "././assets/gifs/chocolate_caliente.gif"
        console.log("Video: ", this.video)
        break;
      case "Coca Cola":
        this.video = "././assets/gifs/coca_cola.gif"
        console.log("Video: ", this.video)
        break;
      case "Fanta Naranja":
        this.video = "././assets/gifs/fanta_naranja.gif"
        console.log("Video: ", this.video)
        break;
      case "Frappé Chai":
        this.video = "././assets/gifs/frappe_chai.gif"
        console.log("Video: ", this.video)
        break;
      case "Frappé Latte":
        this.video = "././assets/gifs/frappe_chai.gif"
        console.log("Video: ", this.video)
        break;
      case "Frappé Mocha":
        this.video = "././assets/gifs/frappe_chai.gif"
        console.log("Video: ", this.video)
        break;
      case "Frappé Oreo":
        this.video = "././assets/gifs/frappe_chai.gif"
        console.log("Video: ", this.video)
        break;
      case "Sprite":
        this.video = "././assets/gifs/sprite.gif"
        console.log("Video: ", this.video)
        break;
      case "Té Chai":
        this.video = "././assets/gifs/te_chai.gif"
        console.log("Video: ", this.video)
        break;
      case "Té Manzanilla":
        this.video = "././assets/gifs/te_manzanilla.gif"
        console.log("Video: ", this.video)
        break;
      case "Té Menta":
        this.video = "././assets/gifs/te_menta.gif"
        console.log("Video: ", this.video)
        break;
      case "Té Negro":
        this.video = "././assets/gifs/te_negro.gif"
        console.log("Video: ", this.video)
        break;
      case "Té Rojo":
        this.video = "././assets/gifs/te_rojo.gif"
        console.log("Video: ", this.video)
        break;
      case "Té Verde":
        this.video = "././assets/gifs/te_verde.gif"
        console.log("Video: ", this.video)
        break;
      default:
        this.video = ""
        break;
    }
  }

  backToMenu() {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

}
