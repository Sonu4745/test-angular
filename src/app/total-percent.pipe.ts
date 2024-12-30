import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalPercent'
})
export class TotalPercentPipe implements PipeTransform {

  transform(value:any , value1:any ,total:any){
    const percentage = ((value + value1) / total) * 100;
    return `${percentage.toFixed(2)}`;
    // return percentage;
    
  }

}
