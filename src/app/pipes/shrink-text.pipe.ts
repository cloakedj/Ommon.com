import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shrinkText'
})
export class ShrinkTextPipe implements PipeTransform {

  transform(value: any, length?: number): any {
    return value.slice(0, length) + '...';
  }

}
