import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks'; //URL de Backend

  constructor(private http: HttpClient) { }

  //obtener las tareas
  getTasks(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  //Crear una nueva tarea
  addTask(task: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, task);
  }

  //Actualizar una tarea (por ejemplo, marcar como compleatada)
  updateTask(id: number, task: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, task);
  }

  //Eliminar una tarea
  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
