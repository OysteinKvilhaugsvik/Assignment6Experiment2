import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "./Todo";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TodoService {
  todosUrl = 'http://localhost:51700/todos';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.todosUrl)
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(this.todosUrl, todo, this.httpOptions)
  }

  deleteTodo(id: number): Observable<unknown> {
    const url = `${this.todosUrl}/${id}`;
    return this.http
      .delete(url)
  }
  
  
}