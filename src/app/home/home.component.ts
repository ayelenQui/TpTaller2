import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import {FuncionesComponent} from '../funciones/funciones.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FuncionesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy,DoCheck{
  crearNuevaTarea() {
    alert('Crear Nueva Tarea');
  }

  verTareasPendientes() {
    alert('Ver Tareas Pendientes');
  }

  modificarTarea() {
    alert('Modificar Tarea');
  }

  eliminarTarea() {
    alert('Borrar Tarea');
  }



  ngDoCheck(): void {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
