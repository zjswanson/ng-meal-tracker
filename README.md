# MealTracker

MealTracker is an Angular 2 app built to demonstrate the basic concepts of assembling an app with Angular.  It uses a simple one-module structure with nested components, an injectable data service to connect to the data store, and exchange of data and actions across components.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Authorship

MealTracker was created by Zach Swanson on 3/31/17.  

There is no ongoing support planned for MealTracker, but feel free to email questions and comments to zach.j.swanson@gmail.com

Licensed under MIT license

## Installation

MealTracker is generously hosted by the fine folks at Firebase.  You can vist at: https://meal-tracker-ebfd6.firebaseapp.com

To install an instance locally, first clone the repository from git and run the following commands from the project root in the terminal:

npm install
bower install
MealTracker requires a connection to a firebase datastore in order to function.  To set up, first create a file at src/app/api-keys.ts with the following contents:

export var masterFirebaseConfig = {
  apiKey: ,
    authDomain: ,
    databaseURL: ,
    projectId: ,
    storageBucket: ,
    messagingSenderId:
}

Then, create a new firebase project, click on the "add firebase to your web app" button, and paste the values it gives you into the above properties.

You can then run a local instance of the app by using the angular CLI to build and serve the app with the "ng serve" from the project root.

## Development Process

Wireframe at https://wireframe.cc/buOKgA

Required module elements:
Meal Model
firebase service
Dashboard Component (contains edit form)
List component
Add Form component
filterByCalories pipe

Production plan:
Create Model
Create seed data
Connect firebase service
create list component
Create add component
create filter pipe
create dashboard component



# Auto-Generated notes from Angular-CLI:


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
