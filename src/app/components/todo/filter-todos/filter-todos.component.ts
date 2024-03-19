import { Component } from '@angular/core';
import { SearchTodosComponent } from '../search-todos/search-todos.component';
import {MatChipsModule} from '@angular/material/chips';
import { FilterService } from '../../../services/filter.service';
import { Filter } from '../../../models/filter-enum';

@Component({
  selector: 'app-filter-todos',
  standalone: true,
  imports: [SearchTodosComponent, MatChipsModule],
  templateUrl: './filter-todos.component.html',
  styleUrl: './filter-todos.component.scss'
})
export class FilterTodosComponent {
  Filter = Filter;
  filter: Filter;

  constructor(private filterService: FilterService){
    this.filter = this.filterService.getActiveFilter();
  }

  setFilter(filter: Filter){
    this.filterService.setFilter(filter);
  }
}
