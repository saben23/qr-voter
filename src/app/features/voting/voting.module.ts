import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingComponent } from './voting.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    BarRatingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [VotingComponent],
  exports: [VotingComponent]
})
export class VotingModule { }
