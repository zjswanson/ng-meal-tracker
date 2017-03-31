/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MealDashComponent } from './meal-dash.component';

describe('MealDashComponent', () => {
  let component: MealDashComponent;
  let fixture: ComponentFixture<MealDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
