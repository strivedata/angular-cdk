import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabPanelListDirective } from './tab-panels.directive';
import { TabDirective } from './tab.directive';
import { TabGroupDirective } from './tab-group.directive';
import { TabListDirective } from './tab-list.directive';
import { TabPanelDirective } from './tab-panel.directive';


@NgModule({
  declarations: [
    TabGroupDirective,
    TabDirective,
    TabPanelDirective,
    TabPanelListDirective,
    TabListDirective
  ],
  exports: [
    TabGroupDirective,
    TabDirective,
    TabPanelDirective,
    TabPanelListDirective,
    TabListDirective
  ],
  imports: [
    CommonModule
  ]
})
export class TabsModule { }
