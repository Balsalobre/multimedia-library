import { Pipe, PipeTransform } from '@angular/core';
import * as underscore from 'underscore';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>): Array<any> {
    if (!value) { return []; }
    console.log(value);
    const items = underscore.sortBy(value, item =>  item.title);
    console.log(items);
    return items;

    // Si lo queremos por el orden inverso
    // return underscore.sortBy(value, item =>  item.title).reverse();
  }

}
