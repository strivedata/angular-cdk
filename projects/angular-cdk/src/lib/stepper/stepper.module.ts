import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StriveCdkStepper } from './stepper';
import { StriveCdkStep } from './step';
import { StriveCdkStepperLabel, StriveCdkStepperNext, StriveCdkStepperPrevious } from './stepper-buttons';


@NgModule({
  declarations: [
    StriveCdkStep,
    StriveCdkStepper,
    StriveCdkStepperNext,
    StriveCdkStepperPrevious,
    StriveCdkStepperLabel
  ],
  exports: [
    StriveCdkStep,
    StriveCdkStepper,
    StriveCdkStepperNext,
    StriveCdkStepperPrevious,
    StriveCdkStepperLabel
  ],
  imports: [
    CommonModule
  ]
})
export class StepperModule { }
