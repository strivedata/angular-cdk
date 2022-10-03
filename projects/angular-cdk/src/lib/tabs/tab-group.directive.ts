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
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[tabGroup]',
  exportAs: 'tabGroup',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TabGroupDirective,
    multi: true
  }]
})
export class TabGroupDirective implements ControlValueAccessor, AfterViewInit {

  @Input() selectedTab = 0;
  @Input() disabled = false;
  @Output() selectedTabChange = new EventEmitter<number>();

  @ContentChild(TabPanelListDirective)
  private panelList?: TabPanelListDirective;

  @ContentChild(TabListDirective)
  private tabList?: TabListDirective;

  private onChange = (value: any) => {};
  private onTouched = () => {};
  private touched = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.selectTab(this.selectedTab || 0); // select first tab by default
  }

  selectTab(index: number) {
    this.markAsTouched();
    this.tabList?.selectTab(index);
    this.panelList?.activatePanel(index);
    this.selectedTab = index;
    this.selectedTabChange.emit(index);
    this.onChange(index);
    // manually trigger change detection, because this method is potentially getting called from the tab components, which
    // are children in the component tree, causing angular to throw an 'Expression has changed after it was checked' error
    this.changeDetectorRef.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.selectTab(value);
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

}
