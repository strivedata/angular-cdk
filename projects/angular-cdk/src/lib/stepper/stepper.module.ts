import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIXStepper } from './stepper';
import { UIXStep } from './step';
import { UIXStepperSelect, UIXStepperNext, UIXStepperPrevious } from './stepper-buttons';


@NgModule({
  declarations: [
    UIXStep,
    UIXStepper,
    UIXStepperNext,
    UIXStepperPrevious,
    UIXStepperSelect
  ],
  exports: [
    UIXStep,
    UIXStepper,
    UIXStepperNext,
    UIXStepperPrevious,
    UIXStepperSelect
  ],
  imports: [
    CommonModule
  ]
})
export class UIXStepperModule { }
