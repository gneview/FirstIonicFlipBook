import { Component } from "@angular/core";
import { ListPage } from "../list/list";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-hello-ionic",
  templateUrl: "hello-ionic.html"
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {}

  public gotoList() {
    this.navCtrl.push(ListPage);
  }
}
