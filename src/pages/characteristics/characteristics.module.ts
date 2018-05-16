import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacteristicsPage } from './characteristics';

@NgModule({
  declarations: [
    CharacteristicsPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacteristicsPage),
  ],
})
export class CharacteristicsPageModule {}
