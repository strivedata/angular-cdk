import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleRoutingModule } from './toggle-routing.module';
import { ToggleComponent } from './toggle.component';
import { CustomToggleComponent } from './custom-toggle/custom-toggle.component';
import { UIXToggleModule } from '@strivestudio/angular-cdk';


@NgModule({
  declarations: [
    ToggleComponent,
    CustomToggleComponent
  ],
  imports: [
    CommonModule,
    ToggleRoutingModule,
    UIXToggleModule
  ]
})
export class ToggleModule { }
