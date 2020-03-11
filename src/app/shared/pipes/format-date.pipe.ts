import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";
@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(typeof value=="string")
    return moment(value.replace(" ",'T')+"Z").format("DD-MMM-YYYY HH:mm");
  }

}
