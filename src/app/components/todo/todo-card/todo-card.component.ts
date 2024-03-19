import { Component, input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { Todo } from '../../../models/todo';
import { CommonModule } from '@angular/common';
import { LuxonDatePipe } from '../../../pipes/luxon-date';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    LuxonDatePipe,
  ],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  constructor(private todoService: TodoService) {}

  todo = input.required<Todo>();

  completeTodo(todo: Todo) {
    todo.progress = 100;
    this.todoService.updateTodo(todo).subscribe();
    console.log(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo._id).subscribe((r) => {
      if(r){
        console.log('successfully deleted todo with id: ' + r);
      }
    });
    console.log(todo);
  }

  setTodoPercentage(todo: Todo) {
    //TODO: set
    console.log(todo);
    alert('TODO: future feature');
  }
}
