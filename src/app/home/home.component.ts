import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import {TaskService} from '../task.service';
import {FuncionesComponent} from '../funciones/funciones.component';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FuncionesComponent, FormsModule, NgIf, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  tasks: any[] = [];//Lista de tareas
  newTaskTitle: string = '';//Titulo de la nueva tarea

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  // Obtener todas las tareas
  getTasks(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }
  // Crear una nueva tarea
  crearNuevaTarea(): void {
    const newTask = { title: this.newTaskTitle };
    this.taskService.addTask(newTask).subscribe(task => {
      this.tasks.push(task);
      this.newTaskTitle = '';  // Limpiar el campo después de agregar la tarea
    });
  }
  // Eliminar una tarea
  eliminarTarea(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }

  /*
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
   */


  ngDoCheck(): void {
  }

  ngOnDestroy(): void {
  }
/*
  ngOnInit(): void {
  }
*/
  modificarTarea() {
    //queda hacer esta funcion
  }
}
