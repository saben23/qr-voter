import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BarRatingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
