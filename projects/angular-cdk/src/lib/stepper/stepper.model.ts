import { StriveCdkStep } from './step.component';

/** Change event emitted when the selected step changes. */
export interface StepperSelectionEvent {
  selectedStepIndex: number;
  previousStepIndex: number;
  selectedStep: StriveCdkStep;
  previousStep: StriveCdkStep;
}
