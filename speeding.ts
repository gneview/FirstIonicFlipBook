import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PreacherPage } from "../preacher/preacher";
import { ListPage } from "../list/list";

/**
 * Generated class for the SpeedingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-speeding",
  templateUrl: "speeding.html"
})
export class SpeedingPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public gotoPreacher() {
    this.navCtrl.push(PreacherPage);
  }

  public goBack() {
    this.navCtrl.push(ListPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SpeedingPage");
  }
}
