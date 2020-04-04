import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingComponent } from './voting.component';
import { BarRatingModule } from 'ngx-bar-rating';

@NgModule({
  imports: [
    CommonModule,
    BarRatingModule
  ],
  declarations: [VotingComponent],
  exports: [VotingComponent]
})
export class VotingModule { }
