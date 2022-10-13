import { Directive, Input } from '@angular/core';

import { UIXStepper } from './stepper';
import { UIXStep } from './step';

/** Button that moves to the next step in a stepper workflow. */
@Directive({
  selector: 'button[uixStepperNext]',
  host: {
    '[type]': 'type',
    '(click)': 'stepper.next()',
  },
})
export class UIXStepperNext {

  /** Type of the next button. Defaults to 'button' if not specified. */
  @Input() type: string = 'button';

  constructor(public stepper: UIXStepper) { }

}

/** Button that moves to the previous step in a stepper workflow. */
@Directive({
  selector: 'button[uixStepperPrevious]',
  host: {
    '[type]': 'type',
    '(click)': 'stepper.previous()',
  },
})
export class UIXStepperPrevious {

  /** Type of the previous button. Defaults to 'button' if not specified. */
  @Input() type: string = 'button';

  constructor(public stepper: UIXStepper) { }

}

/** Label that selects the given step. */
@Directive({
  selector: '[uixStepperSelect]',
  host: {
    '(click)': 'stepper.select(uixStepperSelect)',
  },
})
export class UIXStepperSelect {

  @Input() uixStepperSelect: number | UIXStep | undefined;

  constructor(public stepper: UIXStepper) { }

}
