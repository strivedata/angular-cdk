import {
  AfterContentInit,
  ChangeDetectorRef,
  ContentChildren,
  Directive,
  EventEmitter,
  Input,
  Output,
  QueryList
} from '@angular/core';
import { UIXTab } from './tab';
import { TabChangeEvent } from './tab-models';

@Directive({
  selector: '[uixTabGroup],uix-tab-group',
  exportAs: 'uixTabGroup'
})
export class UIXTabGroup implements AfterContentInit {

  /** List of all tabs for this group. */
  @ContentChildren(UIXTab) tabs!: QueryList<UIXTab>;

  /** Returns the component instance of the currently selected tab. */
  @Input() get selectedTab(): UIXTab | undefined {
    return this.tabs ? this.tabs.toArray()[this.selectedTabIndex] : undefined;
  }

  /** Sets the given tab as the selected tab. */
  set selectedTab(tab: UIXTab | undefined) {
    this.selectedTabIndex = tab ? this.tabs.toArray().indexOf(tab) : -1;
  }

  /** Returns the index of the currently selected tab. */
  @Input() get selectedTabIndex(): number {
    return this._selectedTabIndex;
  }

  /** Sets the selected tab to the given index. */
  set selectedTabIndex(newIndex: number) {
    if (this.tabs) {
      if (!this.isValidIndex(newIndex)) {
        // ensure we can't select tabs that don't exist
        throw Error('[UIXTabGroup]: Cannot assign out-of-bounds index.');
      }
      if (newIndex !== this._selectedTabIndex) {
        this.selectTabAtIndex(newIndex);
      }
    } else {
      // method has been called before any tabs have been loaded, so we can't check if this is valid index and
      // must select it 'blanco'
      this._selectedTabIndex = newIndex;
    }
  }

  private _selectedTabIndex = 0;

  /** Emitted when the selected tab has changed. */
  @Output() readonly selectedTabChange = new EventEmitter<TabChangeEvent>();

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterContentInit() {
    // as tabs get projected into the group, we have to make sure change detection works correctly
    this.changeDetectorRef.detectChanges();
  }

  /**
   * Selects the tab at the given index.
   * @param index - Index of the tab to be selected.
   */
  selectTab(index: number) {
    this.selectedTabIndex = index;
  }

  /**
   * Selects the tab at the given index and emit a new change event.
   * @param newIndex - The index of the tab to be selected.
   * @private
   */
  private selectTabAtIndex(newIndex: number): void {
    const tabsArray = this.tabs.toArray();
    if (tabsArray[newIndex]?.disabled) {
      return; // prevent selection of disabled tabs
    }
    this.selectedTabChange.emit({
      selectedTab: tabsArray[newIndex],
      selectedTabIndex: newIndex,
      previousTab: tabsArray[this._selectedTabIndex],
      previousTabIndex: this._selectedTabIndex
    });
    this._selectedTabIndex = newIndex;
  }

  /**
   * Checks whether the passed-in index is a valid tab index.
   * @param index - The index to be checked
   * @private
   */
  private isValidIndex(index: number): boolean {
    return index > -1 && (!this.tabs || index < this.tabs.length);
  }

}
