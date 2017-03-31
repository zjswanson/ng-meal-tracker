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

  addMeal(newMeal: Meal) {
    this.meals.push(newMeal);
  }

  getMealById(mealId: string) {
    return this.angularFire.database.object('/meals/' + mealId);
  }

  updateMeal(mealToEdit) {
    var mealEntryInDatabase = this.getMealById(mealToEdit.$key);
    mealEntryInDatabase.update({ name: mealToEdit.name,
                                notes: mealToEdit.notes,
                                calories: mealToEdit.calories
                              });
  }

}
