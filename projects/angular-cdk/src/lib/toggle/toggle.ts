import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[uixToggle]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: UIXToggle,
    multi: true
  }]
})
export class UIXToggle implements ControlValueAccessor {

  /** Whether the toggle is checked. */
  @Input() checked = false;

  /** Whether the toggle is disabled. */
  @Input() disabled = false;

  /** Emits the new state whenever it changes. */
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
