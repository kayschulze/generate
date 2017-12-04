import { Component, Output, EventEmitter, ViewChild, NgZone, AfterViewInit } from '@angular/core';

var Guppy = (window as any).Guppy;
var $ = (window as any).$;

@Component({
  selector: 'app-guppy-window',
  templateUrl: './guppy-window.component.html',
  styleUrls: ['./guppy-window.component.css']
})

export class GuppyWindowComponent implements AfterViewInit {
  @ViewChild('guppyContainer') guppyContainer;

  @Output() change = new EventEmitter();
  guppy;

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit() {
    this.guppy = new Guppy(this.guppyContainer.nativeElement, {
      events: {
        change: () => {
          if (this.guppy) {
            this.ngZone.run(() => {
              this.change.emit (this.guppy.backend.get_content("text"))
            });
          }
        },
        ready: () => {
          Guppy.ready = true;
        }
      }
    });
  }
}
