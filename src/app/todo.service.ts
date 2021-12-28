import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  salvar(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  listar(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  deletar(id: number): Observable<void> {
    console.log(id);
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<void>(url);
  }

  marcarComoConcluido(id: number): Observable<Todo> {
    const url = `${this.apiUrl}/${id}/done`
    return this.http.patch<Todo>(url, {})
  }

}
