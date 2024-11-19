import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import {NgIf} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {FuncionesComponent} from './funciones/funciones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
HomeComponent,
    NgIf,
    RouterLink,
    FuncionesComponent
  ],
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
