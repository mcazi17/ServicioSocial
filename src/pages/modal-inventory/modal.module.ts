import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalInventory } from './modal';

@NgModule({
  declarations: [
    ModalInventory,
  ],
  imports: [
    IonicPageModule.forChild(ModalInventory),
  ],
})
export class ModalPageModule {}
