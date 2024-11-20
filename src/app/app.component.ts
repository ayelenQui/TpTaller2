import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import{HomeComponent} from './home/home.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import {NgIf} from '@angular/common';



import {Evento} from './modelo/evento';
import {CrearListaComponent} from './crearLista/crearLista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [

    NgIf,
    RouterLink,

    RouterOutlet,
    CrearListaComponent,

  ],
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  protected readonly HomeComponent = HomeComponent;
}
