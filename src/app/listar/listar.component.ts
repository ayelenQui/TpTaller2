import { Component, OnInit } from '@angular/core';
import {FuncionesService} from '../service/funciones.service';
import {Evento} from '../modelo/evento';
import {DatePipe, NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    DatePipe,
    RouterLink
  ],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
 datoslistas : Array<Evento>=[];
  constructor(private funcionesService : FuncionesService) {
  }
  ngOnInit(): void {
    this.funcionesService.ConsultarLista().subscribe(
      (datos) => {
        this.datoslistas = datos;  // Asignamos los datos a la propiedad datoslistas
      },
      (error) => {
        console.error('Error al obtener los datos', error);  // Manejo de errores
      }
    );
  }
}
