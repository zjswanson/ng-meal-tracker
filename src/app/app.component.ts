import { Component, OnInit } from '@angular/core';
import { Meal } from './meal-model';
import { mealService } from './mealService.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  meals: Meal[] = [];
  mealToEdit: Meal = null;
  sortBy: string = 'none';
  mealCount: number;
  calorieCount: number;

  constructor(private mealService: mealService) { }

  ngOnInit() {
    this.mealService.getMeals().subscribe(result => {
      let mealArray: Meal[] = [];
      result.forEach(function(meal) {
        let newMeal = new Meal(meal.name, meal.notes, parseInt(meal.calories));
        newMeal.$key = meal.$key
        mealArray.push(newMeal);
      });
      this.meals = mealArray;
      this.mealCount = mealArray.length;
      this.calorieCount = this.countCalories();
    });
  }

  countCalories() {
    let count: number = 0;
    this.meals.forEach(function(meal) {
      count += meal.calories
    });
    return count;
  }

  addMeal(newMeal) {
    this.mealService.addMeal(newMeal);
  }

  openEdit(meal: Meal) {
    this.mealToEdit = meal;
  }

  saveEdit(meal: Meal) {
    this.mealService.updateMeal(meal);
    this.mealToEdit = null;
  }

  sortList(sortBy: string) {
    this.sortBy = sortBy;
  }

}
