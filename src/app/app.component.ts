import { Component, OnInit } from '@angular/core';
import { Equation } from './equation';

declare let d3: any;

var Guppy = (window as any).Guppy;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Generator';

  equation = new Equation('');

  ngOnInit() {
    Guppy.init_symbols(["/assets/symbols.js"]);
  }

  change(newInput) {
    this.equation.input = newInput;
  }
}
