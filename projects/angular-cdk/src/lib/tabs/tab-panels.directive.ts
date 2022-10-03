import { ContentChildren, Directive, QueryList } from '@angular/core';
import { TabPanelDirective } from './tab-panel.directive';

@Directive({
  selector: '[tabPanels]'
})
export class TabPanelListDirective {

  @ContentChildren(TabPanelDirective)
  private panels!: QueryList<TabPanelDirective>;

  constructor() { }

  activatePanel(index: number): void {
    this.hideAllPanels(); // make sure no other panel is active
    this.panels.get(index)?.activate();
  }

  hideAllPanels(): void {
    this.panels.forEach(panel => panel.clear());
  }

}
