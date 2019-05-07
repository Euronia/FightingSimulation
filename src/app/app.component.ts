import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RpgFightingSimulator';
  red = '#c54';
  currentMalus = 0;

  setCurrentMalus(value : number) {
    this.currentMalus += value;
  }
}
