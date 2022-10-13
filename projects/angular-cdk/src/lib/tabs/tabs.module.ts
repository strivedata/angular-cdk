import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIXTab } from './tab';
import { UIXTabGroup } from './tab-group';
import { UIXTabSelect } from './tab-select';


@NgModule({
  declarations: [
    UIXTab,
    UIXTabGroup,
    UIXTabSelect
  ],
  exports: [
    UIXTab,
    UIXTabGroup,
    UIXTabSelect
  ],
  imports: [
    CommonModule
  ]
})
export class UIXTabsModule { }
