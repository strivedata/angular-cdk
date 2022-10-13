import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { PlaygroundTabsComponent } from './playground-tabs/playground-tabs.component';
import { UIXTabsModule } from '@strivestudio/angular-cdk';


@NgModule({
  declarations: [
    TabsComponent,
    PlaygroundTabsComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    UIXTabsModule
  ]
})
export class TabsModule { }
