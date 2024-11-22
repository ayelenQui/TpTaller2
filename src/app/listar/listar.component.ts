import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../service/funciones.service';
import { Evento } from '../modelo/evento';
import {DatePipe, NgClass, NgForOf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    DatePipe,
    RouterLink,
    NgClass
  ],
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  datoslistas: Array<Evento> = [];

  constructor(private funcionesService: FuncionesService) { }

  ngOnInit(): void {
    this.funcionesService.ConsultarLista().subscribe(
      (datos) => {
        this.datoslistas = datos;
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }

  // Método para marcar tarea como completada y actualizar en el backend
  actualizarTarea(tarea: Evento): void {
    const fechaFormateada = new Date(tarea.fecha).toISOString().split('T')[0]; // 'YYYY-MM-DD'

    // Asignamos la fecha formateada al objeto tarea
    tarea.fecha = fechaFormateada;

    // Invertir el estado de la propiedad 'completada'
    tarea.completada = !tarea.completada;

    this.funcionesService.ActualizarTarea(tarea).subscribe(
      (response) => {
        console.log('Tarea actualizada correctamente:', response);
      },
      (error) => {
        console.error('Error al actualizar la tarea:', error);
      }
    );
  }

  // Método para eliminar tarea
  eliminarTarea(id: number): void {
    this.funcionesService.EliminarTarea(id).subscribe(
      () => {
        this.datoslistas = this.datoslistas.filter(tarea => tarea.id !== id);
      },
      (error) => {
        console.error('Error al eliminar la tarea', error);
      }
    );
  }
}
