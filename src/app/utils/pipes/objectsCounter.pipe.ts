import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectsCounter'
})
export class ObjectsCounterPipe implements PipeTransform {

  transform(value: [{}], args?: any): any {
    return value.length;
  }

}
