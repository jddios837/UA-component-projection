import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-example-two',
  encapsulation: ViewEncapsulation.Native,
  template: `
    <div class="example-two">
      Example Two
    </div>
    <div class="example-one">
      Example One
    </div>
  `,
  styles: [`
    .example-one {
      border: 3px solid #9f72e6;
      font-size: 14px;
      color: #9f72e6;
      padding: 5px 7px;
    }
    .example-two {
      background: #9f72e6;
      font-size: 19px;
      color: #fff;
      margin-bottom: 10px;
      padding: 5px 7px;
    }
  `]
})
export class ExampleTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
