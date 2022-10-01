import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { SingleSelectDirective } from './single-select.directive';

@Directive({
  selector: '[singleSelectOption]'
})
export class SingleSelectOptionDirective {

  @Input() value: any;

  constructor(
    public elementRef: ElementRef,
    private selectGroup: SingleSelectDirective
  ) { }

  get isSelectedOption(): boolean {
    return this.selectGroup.isSelectedOption(this.value);
  }

  @HostListener('click')
  handleClick() {
    this.selectGroup.selectOption(this.value);
  }

}
