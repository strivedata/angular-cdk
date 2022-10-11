import {
  Directive, EventEmitter,
  Input, Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import { StriveCdkStep } from './step.component';
import { StepperSelectionEvent } from './stepper.model';

@Directive({
  selector: '[scdk-stepper]',
  exportAs: 'scdk-stepper'
})
export class StriveCdkStepper {

  /** List of all steps for this stepper that are contained in the component's template. */
  @ViewChildren(StriveCdkStep) steps!: QueryList<StriveCdkStep>;

  /** Returns component of the selected step. */
  @Input() get selectedStep(): StriveCdkStep | undefined {
    return this.steps ? this.steps.toArray()[this.selectedStepIndex] : undefined;
  }

  /** Sets the component for the selected step. */
  set selectedStep(step: StriveCdkStep | undefined) {
    this.selectedStepIndex = step && this.steps.toArray().indexOf(step) || -1;
  }

  private _selectedStepIndex = 0;

  /** Returns the index of the currently selected step. */
  @Input() get selectedStepIndex(): number {
    return this._selectedStepIndex;
  }

  /**
   *  Sets the index for the selected step and selects this as the new selected step.
   * @param index
   */
  set selectedStepIndex(index: number) {
    if (this.steps) {
      if (!this.isValidIndex(index)) {
        // ensure we can't select steps that don't exist
        throw Error('[StriveCdkStepper]: Cannot assign out-of-bounds index.');
      }
      this.selectStepAtIndex(index);
    } else {
      // method has been called before steps have been loaded, so we can't check if this is valid index and
      // must select it 'blanco'
      this._selectedStepIndex = index;
    }
  }

  /** Emitted when the selected step has changed. */
  @Output() readonly selectedStepChange = new EventEmitter<StepperSelectionEvent>();

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
   * Resets the stepper to it's initial state.
   */
  reset(): void {
    this.selectedStepIndex = 0;
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
   * Checks whether the passed-in index is a valid step index.
   * @param index - The index to be checked
   * @private
   */
  private isValidIndex(index: number): boolean {
    return index > -1 && (!this.steps || index < this.steps.length);
  }

}
