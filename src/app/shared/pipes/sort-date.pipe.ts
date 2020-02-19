import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortDate'
})
export class SortDatePipe implements PipeTransform {

  transform(value: Array<any>): Array<any> {
    if (!value) { return []; }
    return value.sort((a, b) => {
      return <any> new Date(a.date) - <any>new Date(b.date)  ;
    });
  }

}
