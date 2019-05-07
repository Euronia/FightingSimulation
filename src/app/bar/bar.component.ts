import { Component, Input, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  static readonly WIDTH = 200;
  @Input() color: String;
  @Input() value: number;
  malus = 0;
  barWidth: number = BarComponent.WIDTH;
  hitWidth = 0;

  constructor() { }

  ngOnInit() {}

  @Input() set setMalus(malus: number) {
      this.malus = malus;
      this.computeWidths();
  }
  computeWidths() {
    this.barWidth = this.computeBarWidth();
    this.hitWidth = BarComponent.WIDTH - this.barWidth;
  }

  styleBar() {
    return {width: this.barWidth + '%' , background: this.color};
  }

  reset() {
    this.malus = 0;
  }

  computeBarWidth(): number {
    let width = 100;
    if (this.malus >= width) {
      width = 0;
    } else if (this.malus > 0) {
      width = 100 - Math.floor(this.malus / this.value * 100);
    }
    console.log( 'width ' + width);
    return width;
  }
}
