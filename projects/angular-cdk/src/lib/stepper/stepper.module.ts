import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StriveCdkStepper } from './stepper';
import { StriveCdkStep } from './step';
import { StriveCdkStepperNext, StriveCdkStepperPrevious } from './stepper-buttons';


@NgModule({
  declarations: [
    StriveCdkStep,
    StriveCdkStepper,
    StriveCdkStepperNext,
    StriveCdkStepperPrevious
  ],
  exports: [
    StriveCdkStep,
    StriveCdkStepper,
    StriveCdkStepperNext,
    StriveCdkStepperPrevious
  ],
  imports: [
    CommonModule
  ]
})
export class StepperModule { }
