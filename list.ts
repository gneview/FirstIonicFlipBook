import { Component } from "@angular/core";

import { NavController, NavParams } from "ionic-angular";

import { HelicopterPage } from "../helicopter/helicopter";
import { PsychicPage } from "../psychic/psychic";
import { TrickyPage } from "../tricky/tricky";
import { SpeedingPage } from "../speeding/speeding";
import { PreacherPage } from "../preacher/preacher";
import { ConclusionPage } from "../conclusion/conclusion";
import { HelloIonicPage } from "../hello-ionic/hello-ionic";

@Component({
  selector: "page-list",
  templateUrl: "list.html"
})
export class ListPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public gotoHelicopter() {
    this.navCtrl.push(HelicopterPage);
  }

  public gotoPsychic() {
    this.navCtrl.push(PsychicPage);
  }

  public gotoTricky() {
    this.navCtrl.push(TrickyPage);
  }

  public gotoSpeeding() {
    this.navCtrl.push(SpeedingPage);
  }

  public gotoPreacher() {
    this.navCtrl.push(PreacherPage);
  }

  public gotoConclusion() {
    this.navCtrl.push(ConclusionPage);
  }

  public goBack() {
    this.navCtrl.push(HelloIonicPage);
  }
}
