import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[toggleSelect]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ToggleSelectDirective,
    multi: true
  }]
})
export class ToggleSelectDirective implements ControlValueAccessor {

  @Input() checked = false;
  @Input() disabled = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  private onChange = (value: boolean) => {};
  private onTouched = () => {};
  private touched = false;

  constructor() { }

  @HostListener('click')
  handleClick() {
    this.markAsTouched();
    if (!this.disabled) {
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
      this.onChange(this.checked);
    }
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

  writeValue(value: boolean): void {
    this.checked = value;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

}
