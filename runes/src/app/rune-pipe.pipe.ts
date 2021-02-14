import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runePipe'
})
export class RunePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if(value == 1) return "Younger Fuþark";
    if(value == 2) return "Elder Fuþark";
    
  }

}
