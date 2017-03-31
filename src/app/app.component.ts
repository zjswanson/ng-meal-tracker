import { Component, OnInit } from '@angular/core';
import { Meal } from './meal-model';
import { mealService } from './mealService.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  meals: Meal[] = [];

  constructor(private mealService: mealService) { }

  ngOnInit() {
    this.mealService.getMeals().subscribe(result => this.meals = result);
    console.log(this.meals);
  }
}
