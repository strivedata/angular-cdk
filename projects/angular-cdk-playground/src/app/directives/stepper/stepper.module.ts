import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper.component';
import { UIXStepperModule } from '@strivestudio/angular-cdk';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StepperComponent,
    CustomStepperComponent
  ],
  imports: [
    CommonModule,
    StepperRoutingModule,
    ReactiveFormsModule,
    UIXStepperModule
  ]
})
export class StepperModule { }
