import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatter'
})
export class FormatterPipe implements PipeTransform {

  transform(value: any, ...args: any[]){
    if(value){
      return value.charAt(0).toUpperCase() + value.slice(1);
  }
    return value;
  }

}
