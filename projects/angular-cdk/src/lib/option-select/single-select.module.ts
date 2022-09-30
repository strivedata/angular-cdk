import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StriveSingleSelectDirective } from './single-select.directive';
import { StriveSingleSelectOptionDirective } from './single-select-option.directive';


@NgModule({
  declarations: [
    StriveSingleSelectDirective,
    StriveSingleSelectOptionDirective
  ],
  exports: [
    StriveSingleSelectDirective,
    StriveSingleSelectOptionDirective
  ],
  imports: [
    CommonModule
  ]
})
export class StriveSingleSelectModule { }
