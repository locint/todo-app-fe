import { Component } from '@angular/core';
import { AddNewTodoComponent } from './add-new-todo/add-new-todo.component';
import { FilterTodosComponent } from './filter-todos/filter-todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [AddNewTodoComponent, FilterTodosComponent, TodoListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

}
