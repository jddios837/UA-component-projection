import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthFormModule } from "./auth-form/auth-form.module";
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleThreeComponent } from './example-three/example-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent,
    // AuthFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthFormModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AuthFormComponent
  ]
})
export class AppModule { }
