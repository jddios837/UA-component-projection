import { Component, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, TemplateRef } from '@angular/core';

import { User } from "./auth-form/auth-form.interface";
import { AuthFormComponent } from './auth-form/auth-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterContentInit {

  // Load component text
  ctx = {
    $implicit: 'De Dios',
    location: 'Merida, Venezuela'
  }

  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {

  }

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    //crea dos componentes dinamicos
    this.entry.createComponent(authFormFactory); 
    //puedo indicar la posicion del componente dinamico
    this.component = this.entry.createComponent(authFormFactory, 0);  
    this.component.instance.title = 'Login'
    this.component.instance.submitted.subscribe(this.loginUser);
    // component.instance.title = 'Texto Cabecera' podemos manipular las propiedades de la aplicacion

    //cargar template
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Juan de Dios Gomez',
      location: 'Santa Marta, Colombia'
    });
  }

  title = 'ng-component-projection';

  rememberMe: boolean = false;

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    // console.log('Login user', user, this.rememberMe);
    console.log('Login user', user);
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    // mover posicion del componente en su contenedor
    this.entry.move(this.component.hostView, 1);
  }
}
