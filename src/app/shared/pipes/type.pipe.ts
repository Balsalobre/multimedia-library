import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: Array<any>, type: string): Array<any> {
    if (!value) { return []; }
    console.log(value);
    console.log(value.filter(x => x.type === type));
    console.log(type);
    return value.filter(x => x.type === type);
  }

}
