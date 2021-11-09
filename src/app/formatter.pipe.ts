import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatter'
})
export class FormatterPipe implements PipeTransform {

  transform(value: any,arg1:any,arg2:any): any {
    
    return value*2 -arg1-arg2;
  }

}
