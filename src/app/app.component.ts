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

  constructor(private mealService: mealService) { }

  ngOnInit() {
    this.mealService.getMeals().subscribe(result => {
      let mealArray: Meal[] = [];
      result.forEach(function(meal) {
        console.log(meal.$key);
        let newMeal = new Meal(meal.name, meal.notes, meal.calories);
        newMeal.$key = meal.$key
        mealArray.push(newMeal);
      });
      this.meals = mealArray;
    });
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
}
