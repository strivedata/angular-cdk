import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MultiSelectDirective } from './multi-select.directive';

@Directive({
  selector: '[multiSelectOption]'
})
export class MultiSelectOptionDirective {

  @Input() value: any;

  constructor(
    public elementRef: ElementRef,
    private selectGroup: MultiSelectDirective
  ) { }

  get isSelected(): boolean {
    return this.selectGroup.isSelected(this.value);
  }

  @HostListener('click')
  handleClick() {
    this.selectGroup.toggleOption(this.value);
  }

}
