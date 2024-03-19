import { Pipe, PipeTransform } from "@angular/core";
import { DateTime } from 'luxon';

@Pipe({
    standalone: true,
    name: 'luxonPipe'
})
export class LuxonDatePipe implements PipeTransform {
    transform(date: DateTime) {
        if(date){
            return date.toFormat("dd.MM.yyyy")
        }
        return '';
    }

}