import { ContentChildren, Directive, QueryList } from '@angular/core';
import { TabDirective } from './tab.directive';

@Directive({
  selector: '[tabList]'
})
export class TabListDirective {

  @ContentChildren(TabDirective) tabs!: QueryList<TabDirective>;

  constructor() { }

  selectTab(index: number) {
    this.unselectAllTabs();
    this.tabs.get(index)?.select();
  }

  unselectAllTabs() {
    this.tabs.forEach(tab => tab.unselect());
  }

}
