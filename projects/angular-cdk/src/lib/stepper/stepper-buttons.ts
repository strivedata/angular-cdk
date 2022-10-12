import { Directive, Input } from '@angular/core';

import { StriveCdkStepper } from './stepper';

/** Button that moves to the next step in a stepper workflow. */
@Directive({
  selector: 'button[scdkStepperNext]',
  host: {
    '[type]': 'type',
    '(click)': 'stepper.next()',
  },
})
export class StriveCdkStepperNext {

  /** Type of the next button. Defaults to 'button' if not specified. */
  @Input() type: string = 'button';

  constructor(public stepper: StriveCdkStepper) { }

}

/** Button that moves to the previous step in a stepper workflow. */
@Directive({
  selector: 'button[scdkStepperPrevious]',
  host: {
    '[type]': 'type',
    '(click)': 'stepper.previous()',
  },
})
export class StriveCdkStepperPrevious {

  /** Type of the previous button. Defaults to 'button' if not specified. */
  @Input() type: string = 'button';

  constructor(public stepper: StriveCdkStepper) { }

}
