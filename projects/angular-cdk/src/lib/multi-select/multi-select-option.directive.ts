import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { StriveMultiSelectDirective } from './multi-select.directive';

@Directive({
  selector: '[multiSelectOption]'
})
export class StriveMultiSelectOptionDirective {

  @Input() value: any;

  constructor(
    public elementRef: ElementRef,
    private selectGroup: StriveMultiSelectDirective
  ) { }

  get isSelected(): boolean {
    return this.selectGroup.isSelected(this.value);
  }

  @HostListener('click')
  handleClick() {
    this.selectGroup.toggleOption(this.value);
  }

}
