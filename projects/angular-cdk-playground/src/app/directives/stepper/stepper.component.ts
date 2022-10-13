import { ChangeDetectorRef, Component } from '@angular/core';
import { UIXStepper } from '@strivestudio/angular-cdk';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  providers: [{ provide: UIXStepper, useExisting: StepperComponent }]
})
export class StepperComponent extends UIXStepper {

  constructor(changeDetectorRef: ChangeDetectorRef) {
    super(changeDetectorRef);
  }

}
