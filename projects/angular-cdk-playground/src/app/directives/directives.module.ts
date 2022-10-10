import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MultiSelectModule,
  SingleSelectModule,
  StepperModule,
  TabsModule,
  ToggleSelectModule
} from '@strivestudio/angular-cdk';


@NgModule({
  declarations: [
    DirectivesComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    ReactiveFormsModule,
    ToggleSelectModule,
    SingleSelectModule,
    MultiSelectModule,
    TabsModule,
    StepperModule
  ]
})
export class DirectivesModule { }
