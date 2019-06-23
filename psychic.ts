import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TrickyPage } from "../tricky/tricky";
import { ListPage } from "../list/list";
/**
 * Generated class for the PsychicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-psychic",
  templateUrl: "psychic.html"
})
export class PsychicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public gotoTricky() {
    this.navCtrl.push(TrickyPage);
  }

  public goBack() {
    this.navCtrl.push(ListPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PsychicPage");
  }
}
