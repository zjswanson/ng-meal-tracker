import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal-model'
@Pipe({
  name: 'calorieFilter'
})
export class CalorieFilterPipe implements PipeTransform {

  transform(value: any, filterBy: string): any {
    let outputHigh: any[] = [];
    let outputLow: any[] = [];
    value.forEach(function(meal) {
      if (meal.calories >= 500) {
        outputHigh.push(meal);
      } else {
        outputLow.push(meal);
      }
    });
    if (filterBy === 'high') {
      return outputHigh;
    } else if (filterBy === 'low'){
      return outputLow;
    } else {
      return value;
    }
  }

}
