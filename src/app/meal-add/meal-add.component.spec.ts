/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MealAddComponent } from './meal-add.component';

describe('MealAddComponent', () => {
  let component: MealAddComponent;
  let fixture: ComponentFixture<MealAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
