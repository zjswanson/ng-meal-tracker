import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './../meal-model';


@Component({
  selector: 'app-meal-dash',
  templateUrl: './meal-dash.component.html',
  styleUrls: ['./meal-dash.component.css']
})
export class MealDashComponent implements OnInit {
  @Input() meals: any[];
  @Input() mealToEdit: Meal = null;
  @Output() sendEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
