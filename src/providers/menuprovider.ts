import { Injectable } from '@angular/core';
import { MenuItem } from '../pages/menuitem';

@Injectable()
export class InfoProvider {

  constructor() {
    console.log('Hello InfoProvider Provider');
  }

  loggedIn: boolean;
  toggleStatus: boolean;
  menu: MenuItem[] = [
    {
      id: 0,
      name: "././assets/img/hp1.jpg",
      price_s: 10,
      price_m: 11,
      price_l: 12,
    }
  ];

}
