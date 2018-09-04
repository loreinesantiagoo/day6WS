import {NgModule} from '@angular/core';

import {
  MatSlideToggleModule,
  MatInputModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';


const Material = [ MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatRippleModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  PlatformModule,
  ObserversModule
];


/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
@NgModule({
  imports: [ Material ],
  exports: [ Material]
})
export class CustomMaterialModule {}
