import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StriveCdkStepper } from './stepper.directive';
import { StriveCdkStep } from './step.component';


@NgModule({
  declarations: [
    StriveCdkStepper,
    StriveCdkStep
  ],
  exports: [
    StriveCdkStepper,
    StriveCdkStep
  ],
  imports: [
    CommonModule
  ]
})
export class StepperModule { }
