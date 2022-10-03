import {
  AfterViewInit,
  ChangeDetectorRef,
  ContentChild,
  Directive,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { TabPanelListDirective } from './tab-panels.directive';
import { TabListDirective } from './tab-list.directive';

@Directive({
  selector: '[tabGroup]',
  exportAs: 'tabGroup'
})
export class TabGroupDirective implements AfterViewInit {

  @Input() selectedTab = 0;
  @Output() selectedTabChange = new EventEmitter<number>();

  @ContentChild(TabPanelListDirective)
  private panelList!: TabPanelListDirective;

  @ContentChild(TabListDirective)
  private tabList!: TabListDirective;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.selectTab(this.selectedTab || 0); // select first tab by default
  }

  selectTab(index: number) {
    this.tabList.selectTab(index);
    this.panelList.activatePanel(index);
    this.selectedTab = index;
    this.selectedTabChange.emit(index);
    // manually trigger change detection, because this method is potentially getting called from the tab components, which
    // are children in the component tree, causing angular to throw an 'Expression has changed after it was checked' error
    this.changeDetectorRef.detectChanges();
  }

}
