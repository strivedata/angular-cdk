import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MultiSelectModule,
  SingleSelectModule,
  ToggleSelectModule,
  UIXStepperModule
} from '@strivestudio/angular-cdk';
import { StepperComponent } from './stepper/stepper.component';


@NgModule({
  declarations: [
    DirectivesComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    ReactiveFormsModule,
    ToggleSelectModule,
    SingleSelectModule,
    MultiSelectModule,
    UIXStepperModule
  ]
})
export class DirectivesModule { }
