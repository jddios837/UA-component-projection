import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
	selector: 'auth-form',
	template: `
	<div>
		<form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
			<ng-content></ng-content>
			<label>
			Email address
			<input type="email" name="email" ngModel>
			</label>
			<label>
			Password
			<input type="password" name="password" ngModel>
			</label>
		</form>
	</div>
	`,
	styles: [``]
})
export class AuthFormComponent implements OnInit {

	@Output()
	submitted: EventEmitter<User> = new EventEmitter<User>();
	
	constructor() { }

	ngOnInit(): void { }

	onSubmit(value: User) {
		this.submitted.emit(value);
	}
}
