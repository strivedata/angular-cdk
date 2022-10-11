import { StriveCdkStep } from './step';

/** Change event emitted when the selected step changes. */
export interface StepChangeEvent {
  selectedStepIndex: number;
  previousStepIndex: number;
  selectedStep: StriveCdkStep;
  previousStep: StriveCdkStep;
}
