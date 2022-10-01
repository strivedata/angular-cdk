import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleSelectDirective } from './single-select.directive';
import { SingleSelectOptionDirective } from './single-select-option.directive';


@NgModule({
  declarations: [
    SingleSelectDirective,
    SingleSelectOptionDirective
  ],
  exports: [
    SingleSelectDirective,
    SingleSelectOptionDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SingleSelectModule { }
