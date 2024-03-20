import { Injectable } from '@angular/core';
import { Filter } from '../models/filter-enum';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
    activeFilter: Filter = Filter.ALL;
    setFilter(filter: Filter){
        console.log(filter);
        this.activeFilter = filter;
    }
    getActiveFilter(){
        return this.activeFilter;
    }
}
