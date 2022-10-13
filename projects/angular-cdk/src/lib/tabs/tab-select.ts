import { Directive, Input } from '@angular/core';
import { UIXTabGroup } from './tab-group';

/** Element that selects the tab at the given index. */
@Directive({
  selector: '[uixTabSelect]',
  host: {
    '(click)': 'tabGroup.selectTab(uixTabSelect)',
  },
})
export class UIXTabSelect {

  @Input() uixTabSelect!: number;

  constructor(public tabGroup: UIXTabGroup) { }

}
