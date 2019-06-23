import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SpeedingPage } from "../speeding/speeding";
import { ListPage } from "../list/list";

/**
 * Generated class for the TrickyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tricky",
  templateUrl: "tricky.html"
})
export class TrickyPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public gotoSpeeding() {
    this.navCtrl.push(SpeedingPage);
  }

  public goBack() {
    this.navCtrl.push(ListPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TrickyPage");
  }
}
