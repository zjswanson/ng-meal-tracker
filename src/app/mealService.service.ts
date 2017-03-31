import { Injectable } from '@angular/core';
import { Meal } from './meal-model';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class mealService {
  meals: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.meals = angularFire.database.list('meals');
  }

  getMeals() {
    return this.meals;
  }

}
