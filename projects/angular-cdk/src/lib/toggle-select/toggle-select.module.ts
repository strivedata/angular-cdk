import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleSelectDirective } from './toggle-select.directive';


@NgModule({
  declarations: [
    ToggleSelectDirective
  ],
  exports: [
    ToggleSelectDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ToggleSelectModule { }
