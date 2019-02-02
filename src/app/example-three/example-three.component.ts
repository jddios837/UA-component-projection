import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-example-three',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="example-three">
      Example Three
    </div>
    <div class="example-one">
      Example One
    </div>
  `,
  styles: [`
    .example-one {
      border: 2px solid green;
    }
  `]
})
export class ExampleThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
