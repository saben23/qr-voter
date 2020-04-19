import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  rate = 3.56;
  constructor() { }

  ngOnInit() {
  }

  onRateChange(event: any): void {
    console.log(event);
    this.rate = event;
  }

  onVote(): void {
    console.log('VOTED: ' + this.rate);
  }

}
