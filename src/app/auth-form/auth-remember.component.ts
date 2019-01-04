import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'auth-remember',
	template: `
	<label>
		<input type="checkbox" (change)="onChecked($event.target.checked)">
		Mantener Logeado
	</label>
	`
})
export class AuthRememberComponent implements OnInit {

	@Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit(): void { }

	onChecked(value: boolean) {
		this.checked.emit(value);
	}
}
