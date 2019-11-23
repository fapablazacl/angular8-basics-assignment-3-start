import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _togglingEventLog = new Array<Date>();

  private _displayParagraph = true;

  public isParagraphVisible() : boolean {
    return this._displayParagraph;
  }

  public get togglingEventLog() : Array<Date> {
    return this._togglingEventLog;
  }

  public toggleVisible() : void {
    this._displayParagraph = !this._displayParagraph;
    this._togglingEventLog.push(new Date());

    console.log(this._displayParagraph);
  }
}
