# Day6WS

## step by step

1. create a new proj

```bash
ng new day6WS
```

2. Install angular material Design

``` bash
npm instal --save @angular/material
@angular/cdk @angular/animations
```
```bash
ng add @angular/material
```

3. Install gesture component

```bash
npm install --save hammerjs
```
4. generate new component
```bash
ng g c components/weder```

5. create service module
```bash
ng g s services/wedersvc
```
6. import modules
```app.module.ts
Forms, Reactive Forms, MaterialModules,
```
```weder.ts
import { FormGroup, FormControl } from '@angular/forms';

export class WederComponent implements OnInit {
  wederUpdate = FormGroup({
  city: new FormControl(''),
  weather: new FormControl('')
});
  ```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
