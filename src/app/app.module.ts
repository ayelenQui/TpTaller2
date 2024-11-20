import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar'// Asegúrate de importar RouterModule
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'primeng/tooltip';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CrearListaComponent } from './crearLista/crearLista.component';
import {ListarComponent} from './listar/listar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutes} from './app.routes';
  // Asegúrate de importar las rutas correctamente

@NgModule({
  declarations: [
    // Declara los componentes aquí
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgModule,
    AppComponent,
    HomeComponent,
    AppRoutes,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule,
    TooltipModule,
    CrearListaComponent,
    ListarComponent,
    ReactiveFormsModule,
    CalendarModule
    // Aquí configuras las rutas con RouterModule
  ],
  providers: [],
  bootstrap: [],  // El componente que arranca la aplicación
})
export class AppModule {}
