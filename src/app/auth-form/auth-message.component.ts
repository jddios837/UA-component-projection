import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-message',
  template: `
    <p>
      You will be logged in for {{ days }} days
    </p>
  `
})
export class AuthMessageComponent implements OnInit {

  days: number = 7;

  constructor() { }

  ngOnInit() {
  }

}
