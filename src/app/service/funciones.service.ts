
import { Injectable } from '@angular/core'; // inyectable siempre
import { HttpClient } from '@angular/common/http'; // peticiones
import { Observable } from 'rxjs';
import {FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Evento} from '../modelo/evento';

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

//Eliminar tarea
  deleteTask(id: number): Observable<any>
  {    return this.http.delete<any>(`${this.apiUrl}/${id}`);  }
}
