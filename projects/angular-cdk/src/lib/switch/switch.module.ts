import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StriveAngularCdkSwitchDirective } from './switch.directive';



@NgModule({
  declarations: [
    StriveAngularCdkSwitchDirective
  ],
  exports: [
    StriveAngularCdkSwitchDirective
  ],
  imports: [
    CommonModule
  ]
})
export class StriveAngularCdkSwitchModule { }
