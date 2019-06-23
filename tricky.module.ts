import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrickyPage } from './tricky';

@NgModule({
  declarations: [
    TrickyPage,
  ],
  imports: [
    IonicPageModule.forChild(TrickyPage),
  ],
})
export class TrickyPageModule {}
