import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ListPage } from "../list/list";

/**
 * Generated class for the ConclusionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-conclusion",
  templateUrl: "conclusion.html"
})
export class ConclusionPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public goBack() {
    this.navCtrl.push(ListPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ConclusionPage");
  }
}
