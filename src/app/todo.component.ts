import { Component } from '@angular/core';
import { Todo } from "./Todo"
import { TodoService } from './todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './start.html',
  styleUrls: ['./start.css']
})
export class TodoComponent {
  summary = '';
  description = '';
  title = 'my-app';

  constructor(private todoService: TodoService){}

  todos = [
    { id: 1, summary: 'eat', description: "hungry boy" },
    { id: 2, summary: 'sleep', description: "sleepy boy" },
    { id: 3, summary: 'laugh', description: "happy boy" },
  ];

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  add(summary: string, description: string): void {
    const newTodo: Todo = { summary, description } as Todo;
    this.todoService
      .addTodo(newTodo)
      .subscribe((todo) => this.todos.push(todo));
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
    this.todoService.deleteTodo(todo.id).subscribe();
  }

  refresh(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }
}

