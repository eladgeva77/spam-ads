import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFilter'
})
export class TimeFilterPipe implements PipeTransform {

  //this methed fiters the given array based on the given arguments.
  transform(array: any, startTime : number, endTime : number): any {

    let startTimeValid = startTime !== undefined && startTime !== null;
    let endTimeValid  = endTime !== undefined && endTime !== null;

    if(array.length === 0)
    {
      return array;
    }

    if(!startTimeValid && !endTimeValid )
    {
      return array;
    }

    return array.filter(function(index){
      //if both arguments are valid
      if(startTimeValid && endTimeValid)
      {
        return parseInt(index.time.getTime()) >= startTime && index.time.getTime() <= endTime;
      }
      //if the startTime argument is valid
      else if(startTimeValid)
      {
        return parseInt(index.time.getTime()) >= startTime;
      }
      //if the endTime argument is valid
      else if(endTimeValid)
      {
        return parseInt(index.time.getTime()) <= endTime;
      }
      return true;
    });
  }

}
