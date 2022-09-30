import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { StriveSingleSelectDirective } from './single-select.directive';

@Directive({
  selector: '[singleSelectOption]'
})
export class StriveSingleSelectOptionDirective {

  @Input() value: any;

  constructor(
    public elementRef: ElementRef,
    private selectGroup: StriveSingleSelectDirective
  ) { }

  get isSelectedOption(): boolean {
    return this.selectGroup.isSelectedOption(this.value);
  }

  @HostListener('click')
  handleClick() {
    this.selectGroup.selectOption(this.value);
  }

}
