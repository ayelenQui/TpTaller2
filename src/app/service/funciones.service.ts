import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../modelo/evento';

@Injectable({
  providedIn: 'root',
})
export class FuncionesService {
  private apiUrl = 'http://127.0.0.1:3000';  // URL base de la API

  constructor(private http: HttpClient) {}

  // Listar todas las tareas
  ConsultarLista(): Observable<any> {
    return this.http.get(`${this.apiUrl}/lista`);
  }

  // Crear una nueva tarea
  CrearTarea(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(`${this.apiUrl}/crearLista`, evento);
  }

  // Eliminar tarea
  EliminarTarea(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/tareas/eliminar/${id}`);  // Ajustar la URL de eliminación
  }

  // Actualizar tarea (nuevo método)
  ActualizarTarea(tarea: Evento): Observable<Evento> {
    return this.http.put<Evento>(`${this.apiUrl}/tareas/actualizar/${tarea.id}`, tarea);  // Ajustar la URL de actualización
  }

}
