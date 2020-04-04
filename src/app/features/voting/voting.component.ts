import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
  }

  openPdf(): void {
    const pdfContent = { content: [
      // ...
      {
        text: 'Other Details',
        style: 'header'
      },
      {
        text: 'details'
      },
      {
        text: 'Signature',
        style: 'sign'
      },
      {
        columns : [
            { qr: 'http://localhost:4200', fit : 100 },
            {
            text: `(weburl)`,
            alignment: 'right',
            }
        ]
      }
    ],
      styles: {
        // ...
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italics: true
        },
      }
    };
    pdfMake.createPdf(pdfContent).open();
  }
}
