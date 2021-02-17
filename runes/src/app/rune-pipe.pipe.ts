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
/*  PIPE AVEC HTTP

import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Pipe({
  name: 'runePipe'
})
export class RunePipePipe implements PipeTransform {
  private http: HttpClient
  private data;
  transform(value: unknown, ...args: unknown[]): unknown {
    var vjson = this.http.get("https://immense-reaches-27541.herokuapp.com/alpha/"+value).subscribe(res => {this.data = res});

    var obj = JSON.parse(this.data)

    console.log(this.data);
    return(obj)
    
  }

}

*/