import { Component, Signal, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Todo } from '../../../models/todo';
import { MatCardModule } from '@angular/material/card';
import { TodoService } from '../../../services/todo.service';
import { FilterService } from '../../../services/filter.service';
import { Filter } from '../../../models/filter-enum';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  imports: [TodoCardComponent, MatCardModule, MatPaginatorModule],
})
export class TodoListComponent {
  todos: Signal<Todo[] | undefined> = signal([]);
  filteredTodos = computed(() => {
    const activeFilter = this.filterService.activeFilter;
    // TODO: activefilter is not a signal therefore detection is not working.
    if (activeFilter === Filter.COMPLETED) {
      return this.todos()?.filter((t) => t.progress === 100);
    } else if (activeFilter === Filter.UNFINISHED) {
      return this.todos()?.filter((t) => t.progress === 0);
    } else if (activeFilter === Filter.DELETED) {
      return this.todos()?.filter((t) => t.deleted === true);
    }else {
      return this.todos();
    }
  });
  constructor(
    private todoService: TodoService,
    private filterService: FilterService,
  ) {
    this.todos = toSignal(this.todoService.getTodos());
  }
}
