import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-example-one',
  encapsulation: ViewEncapsulation.Emulated, // it's by default you don't need to add this
  template: `
    <div class="example-one">
      Example One
    </div>
  `,
  styles: [`
    .example-one {
      background: #9f72e6;
      font-size: 19px;
      color: #fff;
      margin-bottom: 50px;
      padding: 10px 20px;
    }
  `]
})
export class ExampleOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
