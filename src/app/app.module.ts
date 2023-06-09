import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from './api/api.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { devToolsModules } from "../build-specifics/devTools";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot({ rootUrl: "http://localhost:3000" }),
    HttpClientModule,
    BrowserAnimationsModule,
    devToolsModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
