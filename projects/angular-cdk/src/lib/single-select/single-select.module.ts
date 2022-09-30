import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StriveSingleSelectGroupDirective } from './single-select-group.directive';
import { StriveSingleSelectOptionDirective } from './single-select-option.directive';


@NgModule({
  declarations: [
    StriveSingleSelectGroupDirective,
    StriveSingleSelectOptionDirective
  ],
  exports: [
    StriveSingleSelectGroupDirective,
    StriveSingleSelectOptionDirective
  ],
  imports: [
    CommonModule
  ]
})
export class StriveSingleSelectModule { }
