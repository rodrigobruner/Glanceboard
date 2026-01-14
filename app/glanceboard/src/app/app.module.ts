import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { App } from './app';

@NgModule({
  imports: [
    BrowserModule,
    FontAwesomeModule,
    App,
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }