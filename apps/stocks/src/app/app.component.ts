import { Component } from '@angular/core';

import { EAppStaticContent } from 'libs/enums/app.enum';

@Component({
  selector: 'coding-challenge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appStaticContent: typeof EAppStaticContent = EAppStaticContent;
  public title: EAppStaticContent = this.appStaticContent.STOCK;
}
