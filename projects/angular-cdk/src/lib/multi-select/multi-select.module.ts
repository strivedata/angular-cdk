import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectOptionDirective } from './multi-select-option.directive';
import { MultiSelectDirective } from './multi-select.directive';


@NgModule({
  declarations: [
    MultiSelectDirective,
    MultiSelectOptionDirective,
  ],
  exports: [
    MultiSelectDirective,
    MultiSelectOptionDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class MultiSelectModule { }
