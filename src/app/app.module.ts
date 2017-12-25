import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {Ng2ArcProgressModule} from 'angular2-arc-progress';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2ArcProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
