import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meal } from './../meal-model'

@Component({
  selector: 'app-meal-add',
  templateUrl: './meal-add.component.html',
  styleUrls: ['./meal-add.component.css']
})
export class MealAddComponent implements OnInit {
  // mealName: string;
  // mealNotes: string;
  // mealCalories: number;
  @Output() clickSender = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  addMeal(name: string, notes: string, calories: number) {
    let newMeal = new Meal(name, notes, calories);
    this.clickSender.emit(newMeal);
  }

}
