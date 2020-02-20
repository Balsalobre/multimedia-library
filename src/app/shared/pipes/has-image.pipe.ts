import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasImage'
})
export class HasImagePipe implements PipeTransform {

  transform(value: Array<any>): Array<any> {
    if (!value) {return []; }
    return value.filter(x => x.images[0].split('/')[1] !== 'assets');
  }

}
