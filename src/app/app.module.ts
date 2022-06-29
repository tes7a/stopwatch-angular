import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ScoreboardComponent} from "./scoreboard/scoreboard.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    ScoreboardComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
