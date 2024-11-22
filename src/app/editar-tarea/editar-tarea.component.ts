import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FuncionesService} from '../service/funciones.service';
import {ActivatedRoute} from '@angular/router';
import {Evento} from '../modelo/evento';

@Component({
  selector: 'app-editar-tarea',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './editar-tarea.component.html',
  styleUrl: './editar-tarea.component.css'
})
export class EditarTareaComponent implements OnInit {
  formulario: FormGroup;
  tareaId!: number ;

  constructor(
    private fb: FormBuilder,
    private funcionesService: FuncionesService,
    private route: ActivatedRoute) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      fecha: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    // Obtener el ID de la tarea de la URL
    this.tareaId = +this.route.snapshot.paramMap.get('id')!;

    // Cargar los datos de la tarea seleccionada
    this.funcionesService.ObtenerTareaPorId(this.tareaId).subscribe((tarea: Evento) =>{
      this.formulario.patchValue({
        nombre: tarea.nombre,
        descripcion: tarea.descripcion,
        categoria: tarea.categoria,
        fecha: tarea.fecha,
      });
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const tareaEditada: Evento = { id: this.tareaId, ...this.formulario.value};

      const fechaFormateada = new Date(tareaEditada.fecha).toISOString().split('T')[0]; // 'YYYY-MM-DD'
      tareaEditada.fecha = fechaFormateada;


      this.funcionesService.ActualizarTarea(tareaEditada).subscribe(
        (response) => {
          console.log('Tarea actualizada correctamente:', response);
          alert('Tarea editada correctamente');

        }, error => {
          console.error('Error al actualizar la tarea:', error);
        }
      );
    } else {
      console.log('Formulario invalido');
    }
  }
}
