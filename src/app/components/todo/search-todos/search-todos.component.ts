import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-search-todos',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './search-todos.component.html',
  styleUrl: './search-todos.component.scss'
})
export class SearchTodosComponent {

}
