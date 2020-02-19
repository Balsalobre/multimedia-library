import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSearch'
})
export class DateSearchPipe implements PipeTransform {

  transform(items: any[], searchDate: string): any[] {
    if (!items || !searchDate) {
      return items;
    }
    return items.filter(item =>
      item.date === new Date(searchDate));
  }

}
