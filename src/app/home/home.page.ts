import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  personas : any;
  constructor() {
    this.personas = [
      {
        id    : 1,
        foto  : 'https://cfvod.kaltura.com/p/3457153/sp/345715300/thumbnail/entry_id/1_oe72p6ar/version/100001/width/412/height/248'
      }
    ];
  }

}
