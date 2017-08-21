import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { NavbarModule } from "./navbar/navbar.module";
import { CursosModule } from './cursos/cursos.module';
import { LoginModule}from './login/login.module';
import {HomeModule} from './home/home.module';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    NavbarModule,
    LoginModule,
    HomeModule,
    CursosModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
