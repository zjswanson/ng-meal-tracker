import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';
import { mealService } from './mealService.service';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealAddComponent } from './meal-add/meal-add.component';
import { MealDashComponent } from './meal-dash/meal-dash.component'

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MealListComponent,
    MealAddComponent,
    MealDashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [mealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
