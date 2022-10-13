import {
  AfterContentInit,
  ChangeDetectorRef,
  ContentChildren,
  Directive,
  EventEmitter,
  Input,
  Output,
  QueryList
} from '@angular/core';
import { StepChangeEvent } from './stepper-models';
import { StriveCdkStep } from './step';

@Directive({
  selector: '[scdkStepper],scdk-stepper',
  exportAs: 'scdkStepper'
})
export class StriveCdkStepper implements AfterContentInit {

  /** List of all steps for this stepper that are contained in the component's template. */
  @ContentChildren(StriveCdkStep) steps!: QueryList<StriveCdkStep>;

  /** If true, requires the user to complete previous steps before proceeding. */
  @Input() linear = false;

  /** Returns component of the selected step. */
  @Input() get selectedStep(): StriveCdkStep | undefined {
    return this.steps ? this.steps.toArray()[this.selectedStepIndex] : undefined;
  }

  /** Sets the component for the selected step. */
  set selectedStep(step: StriveCdkStep | undefined) {
    this.selectedStepIndex = step ? this.steps.toArray().indexOf(step) : -1;
  }

  /** The index of the currently selected step. */
  private _selectedStepIndex = 0;

  /** Returns the index of the currently selected step. */
  @Input() get selectedStepIndex(): number {
    return this._selectedStepIndex;
  }

  /**
   * Sets the index for the selected step and selects this as the new selected step.
   * @param newIndex - The index of the step to be selected.
   */
  set selectedStepIndex(newIndex: number) {
    if (this.steps) {
      if (!this.isValidIndex(newIndex)) {
        // ensure we can't select steps that don't exist
        throw Error('[StriveCdkStepper]: Cannot assign out-of-bounds index.');
      }
      if (newIndex !== this._selectedStepIndex && this.allStepsUpToIndexCompleted(newIndex)) {
        this.selectStepAtIndex(newIndex);
      }
    } else {
      // method has been called before steps have been loaded, so we can't check if this is valid index and
      // must select it 'blanco'
      this._selectedStepIndex = newIndex;
    }
  }

  /** Emitted when the selected step has changed. */
  @Output() readonly selectedStepChange = new EventEmitter<StepChangeEvent>();

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterContentInit() {
    // as steps get projected into the stepper, we have to make sure change detection works correctly
    this.changeDetectorRef.detectChanges();
  }

  /**
   * Selects the step at the index after the currently selected step.
   */
  next(): void {
    this.selectedStepIndex = Math.min(this._selectedStepIndex + 1, this.steps.length - 1);
  }

  /**
   * Selects the step at the index previous to the currently selected step.
   */
  previous(): void {
    this.selectedStepIndex = Math.max(this._selectedStepIndex - 1, 0);
  }

  /**
   * Sets the given step as the selected step.
   * @param step - The step to be selected.
   */
  select(step: StriveCdkStep | number): void {
    if (step instanceof StriveCdkStep) {
      this.selectedStep = step;
    } else {
      this.selectedStepIndex = step;
    }
  }

  /**
   * Resets the stepper to it's initial state.
   */
  reset(): void {
    this.selectedStepIndex = 0;
    this.resetAllSteps();
  }

  /**
   * Selects the step at the given index
   * @param newIndex - The index of the step to be selected.
   * @private
   */
  private selectStepAtIndex(newIndex: number): void {
    const stepsArray = this.steps.toArray();
    this.selectedStepChange.emit({
      selectedStepIndex: newIndex,
      previousStepIndex: this._selectedStepIndex,
      selectedStep: stepsArray[newIndex],
      previousStep: stepsArray[this._selectedStepIndex]
    });
    this._selectedStepIndex = newIndex;
  }

  /**
   * Returns true if all steps up to the given index are marked completed.
   * @param index - The index up to which to check the steps.
   * @private
   */
  private allStepsUpToIndexCompleted(index: number): boolean {
    if (!this.linear) {
      return true;
    }
    // if linear mode is enabled, check if any steps before the given index have not been completed
    return this.steps
      .toArray()
      .slice(0, index)
      .filter(step => !step.completed)
      .length === 0;
  }

  /**
   * Calls each step to reset it's initial state.
   * @private
   */
  private resetAllSteps(): void {
    this.steps.forEach(step => step.reset());
  }

  /**
   * Checks whether the passed-in index is a valid step index.
   * @param index - The index to be checked
   * @private
   */
  private isValidIndex(index: number): boolean {
    return index > -1 && (!this.steps || index < this.steps.length);
  }

}
