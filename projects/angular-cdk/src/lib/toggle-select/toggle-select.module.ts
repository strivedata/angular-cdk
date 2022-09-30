import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StriveToggleSelectDirective } from './toggle-select.directive';


@NgModule({
  declarations: [
    StriveToggleSelectDirective
  ],
  exports: [
    StriveToggleSelectDirective
  ],
  imports: [
    CommonModule
  ]
})
export class StriveToggleSelectModule { }
