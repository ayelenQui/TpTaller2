import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // Asegúrate de importar ReactiveFormsModule
import {FuncionesService} from '../service/funciones.service';
import {Evento} from '../modelo/evento';
import {CalendarModule} from 'primeng/calendar';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-crearTarea',
  standalone: true,  // Usando standalone para este componente
  imports: [ReactiveFormsModule, CalendarModule, RouterLink],  // Asegúrate de incluir ReactiveFormsModule
  templateUrl: './crearLista.component.html',
  styleUrls: ['./crearLista.component.css']
})
export class CrearListaComponent implements OnInit {
  title = "Crear Nueva Tarea";
  formulario: FormGroup;
  servicio = FuncionesService;

  constructor(private fb: FormBuilder, protected funcionesService: FuncionesService) {
    this.formulario = this.fb.group({ // aca le digo que ese formulario va a hacer fb de builder
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      fecha: ['', [Validators.required]]
    });
  }


  CrearTarea() {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formulario.valid) {
      const nuevaTarea: Evento = this.formulario.value;




      this.funcionesService.CrearTarea(nuevaTarea).subscribe(
        (response) => {
          console.log('Tarea guardada correctamente:', response);
          // Redirige o muestra mensaje después de guardar
        },
        (error) => {
          console.error('Error al guardar la tarea:', error);
        }
      );
    } else {
      console.log("Formulario inválido");
    }
  }
}


