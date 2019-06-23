import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PsychicPage } from './psychic';

@NgModule({
  declarations: [
    PsychicPage,
  ],
  imports: [
    IonicPageModule.forChild(PsychicPage),
  ],
})
export class PsychicPageModule {}
