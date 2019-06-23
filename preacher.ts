import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ConclusionPage } from "../conclusion/conclusion";
import { ListPage } from "../list/list";

/**
 * Generated class for the PreacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-preacher",
  templateUrl: "preacher.html"
})
export class PreacherPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  public gotoConclusion() {
    this.navCtrl.push(ConclusionPage);
  }

  public goBack() {
    this.navCtrl.push(ListPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PreacherPage");
  }
}
