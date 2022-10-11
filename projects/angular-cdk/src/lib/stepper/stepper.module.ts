import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StriveCdkStepper } from './stepper';
import { StriveCdkStep } from './step';


@NgModule({
  declarations: [
    StriveCdkStep,
    StriveCdkStepper
  ],
  exports: [
    StriveCdkStep,
    StriveCdkStepper
  ],
  imports: [
    CommonModule
  ]
})
export class StepperModule { }
