import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MultiSelectModule,
  SingleSelectModule
} from '@strivestudio/angular-cdk';


@NgModule({
  declarations: [
    DirectivesComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    ReactiveFormsModule,
    SingleSelectModule,
    MultiSelectModule
  ]
})
export class DirectivesModule { }
