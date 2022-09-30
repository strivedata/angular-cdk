import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[singleSelectGroup]',
  exportAs: 'singleSelectGroup',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: StriveSingleSelectGroupDirective,
    multi: true
  }]
})
export class StriveSingleSelectGroupDirective {

  @Input() selectedOption: any;
  @Input() disabled = false;
  @Output() selectedOptionChange = new EventEmitter<any>();

  private onChange = (value: any) => {};
  private onTouched = () => {};
  private touched = false;

  constructor() { }

  selectOption(option: any): void {
    this.markAsTouched();
    if (!this.disabled) {
      this.selectedOption = option;
      this.selectedOptionChange.emit(option);
      this.onChange(option);
    }
  }

  isSelectedOption(option: any): boolean {
    return JSON.stringify(option) === JSON.stringify(this.selectedOption);
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
    this.selectOption(value);
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

}
