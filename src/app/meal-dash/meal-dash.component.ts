import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './../meal-model';


@Component({
  selector: 'app-meal-dash',
  templateUrl: './meal-dash.component.html',
  styleUrls: ['./meal-dash.component.css']
})
export class MealDashComponent implements OnInit {
  @Input() meals: any[];
  @Input() mealToEdit = null;
  @Output() saveEdit = new EventEmitter();
  @Output() sendSort = new EventEmitter();
  sortBy: string;
  @Input()mealCount: number;
  @Input()calorieCount: number;


  constructor() { }

  ngOnInit() {
  }


  sendEdit() {
    this.saveEdit.emit(this.mealToEdit);
  }

  cancelEdit() {
    this.mealToEdit = null;
  }

  sortList(value: string) {
    this.sortBy = value;
    this.sendSort.emit(this.sortBy);
  }

}
