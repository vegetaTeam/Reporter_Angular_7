import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'objToArray'
  })
export class ObjectToArray implements PipeTransform {

  transform(value: any, args: any[] = null): any {
    return Object.keys(value)
  }
}
