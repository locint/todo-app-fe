import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../../../services/todo.service';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-add-new-todo',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-new-todo.component.html',
  styleUrl: './add-new-todo.component.scss',
})
export class AddNewTodoComponent {
  constructor(private todoService: TodoService){}
  
  todoForm = new FormGroup({
    name: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
  });

  addTodo() {
    if(this.todoForm.valid){
      const {name, desc} = this.todoForm.value;
      this.todoService.saveTodo({
        title: name,
        content: desc
      } as Todo).subscribe(() => {
        this.todoForm.reset();
      });
    }
  }
}
