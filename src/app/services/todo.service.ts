import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  serviceUrl = 'http://localhost:8080';
  updateTodos = false;

  constructor(private http: HttpClient) {}
  // TODO: perhaps could cache it here using shareReplay
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.serviceUrl + '/todos');
  }

  saveTodo(todo: Todo): Observable<Todo> {
    if (!todo.progress) {
      todo.progress = 0;
    }
    if (!todo.deleted) {
      todo.deleted = false;
    }
    if (!todo.hidden) {
      todo.hidden = false;
    }

    console.log('saving a new todo: ' + todo.title);
    return this.http.post<Todo>(this.serviceUrl + '/todo', todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    console.log('saving todo progress: ' + todo.progress);
    return this.http.put<Todo>(this.serviceUrl + '/todo', todo);
  }

  deleteTodo(id: string): Observable<string> {
    console.log('deleting id: ' + id);
    return this.http.delete<string>(this.serviceUrl + '/todo/' + id);
  }
}
