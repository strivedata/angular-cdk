import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stepper } from './stepper.directive';
import { StepComponent } from './step.component';


@NgModule({
  declarations: [
    Stepper,
    StepComponent
  ],
  exports: [
    Stepper,
    StepComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StepperModule { }
