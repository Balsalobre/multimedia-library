import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasImage'
})
export class HasImagePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
