import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabPanelListDirective } from './tab-panels.directive';
import { TabDirective } from './tab.directive';
import { TabGroupDirective } from './tab-group.directive';
import { TabListDirective } from './tab-list.directive';
import { TabPanelDirective } from './tab-panel.directive';
import { UIXTab } from './tab';
import { UIXTabGroup } from './tab-group';
import { UIXTabSelect } from './tab-select';


@NgModule({
  declarations: [
    TabGroupDirective,
    TabDirective,
    TabPanelDirective,
    TabPanelListDirective,
    TabListDirective,
    UIXTab,
    UIXTabGroup,
    UIXTabSelect
  ],
  exports: [
    TabGroupDirective,
    TabDirective,
    TabPanelDirective,
    TabPanelListDirective,
    TabListDirective,
    UIXTab,
    UIXTabGroup,
    UIXTabSelect
  ],
  imports: [
    CommonModule
  ]
})
export class UIXTabsModule { }
