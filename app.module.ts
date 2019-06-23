import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { HelloIonicPage } from "../pages/hello-ionic/hello-ionic";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { HelicopterPage } from "../pages/helicopter/helicopter";
import { PsychicPage } from "../pages/psychic/psychic";
import { TrickyPage } from "../pages/tricky/tricky";
import { SpeedingPage } from "../pages/speeding/speeding";
import { PreacherPage } from "../pages/preacher/preacher";
import { ConclusionPage } from "../pages/conclusion/conclusion";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ListPage,
    HelicopterPage,
    PsychicPage,
    TrickyPage,
    SpeedingPage,
    PreacherPage,
    ConclusionPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ListPage,
    HelicopterPage,
    PsychicPage,
    TrickyPage,
    SpeedingPage,
    PreacherPage,
    ConclusionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
