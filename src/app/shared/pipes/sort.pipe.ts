import { Pipe, PipeTransform } from '@angular/core';
import * as underscore from 'underscore';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>): Array<any> {
    if (!value) { return []; }
    const items = underscore.sortBy(value, item =>  item.title);
    return items;
  }

}
