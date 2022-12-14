import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { UIXStepper } from './stepper';
import { AbstractControl } from '@angular/forms';
import { StepperState } from './stepper-models';

@Component({
  selector: 'uix-step',
  exportAs: 'uixStep',
  template: `<ng-template><ng-content></ng-content></ng-template>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UIXStep implements OnInit {

  /** Template ref that holds the injected contents of the step. */
  @ViewChild(TemplateRef, { static: true }) content: TemplateRef<any> | null = null;

  /** Optional text label for this step. */
  @Input() label: string | undefined;

  /** True, if this step is marked as completed. */
  @Input() get completed(): boolean {
    return this.stepControl ? this.stepControl.valid : this._completed;
  };

  /** Marks this step as completed. */
  set completed(status: boolean) {
    this._completed = status;
  }

  private _completed = false;

  /** Abstract control of the step. Used to link it's completed state with an instance of AbstractControl. */
  @Input() stepControl: AbstractControl | undefined | null;

  /** Returns the current state of the stepper in the precedence: selected -> completed -> open. */
  get state(): StepperState {
    return this.isSelected ? 'selected' : (this.completed ? 'completed' : 'open');
  }

  /** Returns true, if this step is the currently selected step. */
  get isSelected(): boolean {
    return this.stepper.selectedStep === this;
  }

  /** Return true, if this step is the last step of the stepper. */
  get isLastStep(): boolean {
    return this === this.stepper.steps.last;
  }

  /** Returns true, if this is the first step of the stepper. */
  get isFirstStep(): boolean {
    return this === this.stepper.steps.first;
  }

  constructor(private stepper: UIXStepper) { }

  ngOnInit(): void { }

  /**
   * Makes this step the currently selected step.
   */
  select(): void {
    this.stepper.selectedStep = this;
  }

  /**
   * Resets this step to it's initial state, marking it uncompleted.
   */
  reset(): void {
    this.completed = false;
  }

  /**
   * Mark this step as completed.
   */
  complete(): void {
    this.completed = true;
  }

}
