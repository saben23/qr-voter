import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarRatingModule } from 'ngx-bar-rating';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { VotingModule } from './features/voting/voting.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    VotingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
