import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StriveMultiSelectOptionDirective } from './multi-select-option.directive';
import { StriveMultiSelectDirective } from './multi-select.directive';


@NgModule({
  declarations: [
    StriveMultiSelectDirective,
    StriveMultiSelectOptionDirective,
  ],
  exports: [
    StriveMultiSelectDirective,
    StriveMultiSelectOptionDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class StriveMultiSelectModule { }
