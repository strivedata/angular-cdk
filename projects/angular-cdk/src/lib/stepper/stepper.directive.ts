import { AfterContentInit, AfterViewInit, ContentChildren, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { StepComponent } from './step.component';
import { StepDirective } from './step.directive';

@Directive({
  selector: '[stepper]',
  exportAs: 'stepper'
})
export class Stepper implements AfterViewInit {

  @Input() selectedStep: StepComponent | undefined;
  @Input() selectedStepIndex = 0;
  @Input() linear = false;

  @Output() selectedStepChange = new EventEmitter<any>();

  @ViewChildren(StepComponent) steps!: QueryList<StepComponent>;

  constructor() {

  }

  ngAfterViewInit(): void {
    console.log(this.steps);
    this.selectStepAtIndex(0);
  }

  /**
   * Selects the next step after the currently selected step. If there is no next step
   */
  next(): void {
    this.selectStepAtIndex(this.selectedStepIndex +1 );
  }

  previous(): void {
    
  }

  getIndexOfStep(step: StepComponent): number {
    return this.steps?.toArray().indexOf(step);
  }

  selectStepAtIndex(index: number): void {
    const stepToSelect = this.steps.get(index);
    if (!stepToSelect) {
      throw new Error(`[SuperStepperDirective]: Invalid step selected. No step found at index ${index}`);
    }
    this.selectStep(stepToSelect);
  }

  selectStep(step: StepComponent) {
    this.selectedStep = step;
    this.selectedStepIndex = this.getIndexOfStep(step);
  }
  
}
