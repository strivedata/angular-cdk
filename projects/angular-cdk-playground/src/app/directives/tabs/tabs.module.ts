import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { CustomTabsComponent } from './playground-tabs/custom-tabs.component';
import { UIXTabsModule } from '@strivestudio/angular-cdk';


@NgModule({
  declarations: [
    TabsComponent,
    CustomTabsComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    UIXTabsModule
  ]
})
export class TabsModule { }
