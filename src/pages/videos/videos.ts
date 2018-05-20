import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  video: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.name = this.navParams.get("name");
    this.price = this.navParams.get("price");
    this.image = this.navParams.get("image");
    this.size = this.navParams.get("size");
    this.milk = this.navParams.get("milk");
    this.sweetener = this.navParams.get("sweetener");
    this.other = this.navParams.get("other");
  }

  findVideo(){
    switch (name) {
      case "cafe_americano":
        
        break;
    
      default:
        this.video = "././assets/imgs/test.gif"
        break;
    }
  }

}
