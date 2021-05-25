import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) 
    const SECONDS_IN_DAY = 86400;
    const SECONDS_IN_HOUR = 3600;
    const SECONDS_IN_MIN = 60;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/SECONDS_IN_DAY;

    if (dateCounter > 30 && value < todayWithNoTime){
        var months = Math.trunc(dateCounter/30);
        var daysRemainder = dateCounter % 30;
        if(months > 1){
            var sForMonth = "s";
        }else if(months===1){
            var sForMonth = "";
        }
        if(daysRemainder > 1){
            var sForDays = "s";
        }else if(daysRemainder===1){
            var sForDays = "";
        }
      return `${months} month${sForMonth}, ${daysRemainder} day${sForDays}`;
    }else if(dateCounter === 30 ){
        return '1 month';
    }else if(dateCounter < 30 && dateCounter > 1){
        return `${dateCounter} days`;
    }else if(dateCounter===1){
        return "1 day";
    }else if(dateCounter < 1){
        var hours = Math.trunc(dateDifferenceSeconds/SECONDS_IN_HOUR);
        if(hours > 1){
            return `${hours} hours`;
        }else if(hours===1){
            return '1 hour';
        }else if(hours<1){
            var minutes = Math.trunc(dateDifferenceSeconds/SECONDS_IN_MIN);
            if(minutes > 1){
                return `${minutes} minutes`;
            }else if(minutes===1){
                return '1 minute';
            }else if(minutes<1){
                return 'Seconds';
            }
        }
    }
  }

}