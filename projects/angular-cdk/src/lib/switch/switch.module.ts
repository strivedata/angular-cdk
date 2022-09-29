import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StriveAngularCdkSwitchDirective } from './switch.directive';
import { SwitchComponent } from './switch.component';


@NgModule({
  declarations: [
    StriveAngularCdkSwitchDirective,
    SwitchComponent
  ],
  exports: [
    StriveAngularCdkSwitchDirective,
    SwitchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StriveAngularCdkSwitchModule { }
