import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[multiSelect]',
  exportAs: 'multiSelect',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: StriveMultiSelectDirective,
    multi: true
  }]
})
export class StriveMultiSelectDirective {

  @Input() selectedOptions: any[] = [];
  @Input() maxSelectableOptions: number = 0;
  @Input() disabled = false;
  @Output() selectedOptionsChange = new EventEmitter<any[]>();

  private onChange = (value: any) => {};
  private onTouched = () => {};
  private touched = false;

  constructor() { }

  get selectableOptionsLimitReached(): boolean {
    if (!this.maxSelectableOptions) {
      return false; // no limit
    }
    return this.selectedOptions?.length >= this.maxSelectableOptions;
  }

  toggleOption(option: any): void {
    if (this.disabled || option == null) {
      return;
    }
    this.markAsTouched();
    const selectedIndex = this.getSelectedIndex(option);
    if (selectedIndex !== -1) {
      // option already selected -> de-select it
      this.selectedOptions.splice(selectedIndex, 1);
    }
    if (selectedIndex === -1 && !this.selectableOptionsLimitReached) {
      // option not included, and we have not reached the allowed limit -> select it
      this.selectedOptions.push(option);
    }
    this.selectedOptionsChange.emit(this.selectedOptions);
    this.onChange(this.selectedOptions);
  }

  isSelected(option: any): boolean {
    return this.getSelectedIndex(option) !== -1;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.toggleOption(value);
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  /**
   * Checks if selectedOptions includes the given option and returns the index; otherwise returns -1.
   */
  private getSelectedIndex(option: any): number {
    return this.selectedOptions.findIndex(next => {
      // do a deep comparison of values in case we have objects
      return JSON.stringify(option) === JSON.stringify(next);
    });
  }

}
