import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import{AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FuncionesComponent} from './funciones/funciones.component';

@NgModule({
  declarations: [


  ],
  imports: [
    BrowserModule,
    AppComponent,
    HomeComponent,
    FuncionesComponent,
     HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
