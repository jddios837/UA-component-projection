import { Component, Renderer, OnInit, Input, Output, ViewChild, AfterViewInit, EventEmitter, ContentChildren, QueryList , AfterContentInit, ElementRef } from '@angular/core';

import { AuthRememberComponent } from "./auth-remember.component";
import { AuthMessageComponent } from "./auth-message.component";

import { User } from './auth-form.interface';


@Component({
	selector: 'auth-form',
	styles: [`
		.email {
			border-color: red;
		}
	`],
	template: `
	<div>
		<form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
			<ng-content select="h3"></ng-content>
			<h3>{{title}}</h3>

			<label>
			Email address
			<input type="email" name="email" #email ngModel>
			</label>
			<label>
			Password
			<input type="password" name="password" ngModel>
			</label>
			<ng-content select="auth-remember"></ng-content>
			<auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
			
			<ng-content select="button"></ng-content>
			<button (click)="onSubmit()">Crear cuenta</button>
		</form>
	</div>
	` 
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

	showMessage: boolean;

	@ViewChild('email') email: ElementRef;

	@ViewChild(AuthMessageComponent) message: AuthMessageComponent;

	// @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;
	// ContenChildren & QueryLists
	@ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

	@Input() title: string = 'Crear Una Cuenta';

	@Output()
	submitted: EventEmitter<User> = new EventEmitter<User>();
	
	constructor(
		private renderer: Renderer
	) { }

	ngAfterViewInit() {
		console.log(this.email.nativeElement);
		// Otra manera de manipular un elemento nativo del DOM con Angular
		this.renderer.setElementAttribute(this.email.nativeElement, 'placeholder', 'Ingresa tu Email');
		this.renderer.setElementClass(this.email.nativeElement, 'email', true);
		this.renderer.invokeElementMethod(this.email.nativeElement, 'focus');

		// Manipular un elemento nativo del DOM a travez de Angular	
		// this.email.nativeElement.setAttribute('placeholder', 'Ingresa tu Email');
		// this.email.nativeElement.classList.add('email');
		// this.email.nativeElement.focus();
		// console.log(this.message);
		// this.message.days = 30;
	}

	ngAfterContentInit() { 
		if (this.message) {
			this.message.days = 30;
		}
		// verifico que exista el componente hijo
		if (this.remember) {
			// si existe me suscribo
			// this.remember.checked.subscribe((checked: boolean) => {
			// 	this.showMessage = checked;
			// })

			// de este modo me suscribo a una lista de hijos
			this.remember.forEach((item) => {
				item.checked.subscribe((checked: boolean) => this.showMessage = checked);
			})
		}
	}

	onSubmit(value: User) {
		this.submitted.emit(value);
	}
}
