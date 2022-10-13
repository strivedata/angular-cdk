import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { UIXTabGroup } from './tab-group';

@Component({
  selector: 'uix-tab',
  exportAs: 'uixTab',
  template: `<ng-template><ng-content></ng-content></ng-template>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UIXTab {

  /** Template ref that holds the injected contents of the tab. */
  @ViewChild(TemplateRef, { static: true }) content: TemplateRef<any> | null = null;

  /** Text label for this tab. */
  @Input() label: string = 'Tab';

  /** Whether this tab is disabled. If true, the tab can't be selected */
  @Input() disabled = false;

  /** Whether this tab is the currently selected tab */
  get isSelected(): boolean {
    return this.tabGroup.selectedTab === this;
  }

  constructor(private tabGroup: UIXTabGroup) { }

}


