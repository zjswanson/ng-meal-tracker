import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Meal} from './../meal-model';
import { CalorieFilterPipe } from './../calorie-filter.pipe'


@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  @Input() meals: Meal[];
  filterBy: string = null;
  @Output() sendEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendMealToEdit(meal: Meal) {
    console.log(meal);
    this.sendEdit.emit(meal);
  }

}
