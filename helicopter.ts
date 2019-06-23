import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PsychicPage } from "../psychic/psychic";
import { ListPage } from "../list/list";

/**
 * Generated class for the HelicopterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-helicopter",
  templateUrl: "helicopter.html"
})
export class HelicopterPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public gotoPsychic() {
    this.navCtrl.push(PsychicPage);
  }

  public goBack() {
    this.navCtrl.push(ListPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HelicopterPage");
  }
}
