import { UIXStep } from './step';

/** Type of states for a step. */
export type StepperState = 'selected' | 'completed' | 'open';

/** Change event emitted when the selected step changes. */
export interface StepChangeEvent {
  selectedStepIndex: number;
  previousStepIndex: number;
  selectedStep: UIXStep;
  previousStep: UIXStep;
}
