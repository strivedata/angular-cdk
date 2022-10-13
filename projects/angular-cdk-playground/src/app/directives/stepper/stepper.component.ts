import { ChangeDetectorRef, Component } from '@angular/core';
import { StriveCdkStepper } from '@strivestudio/angular-cdk';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  providers: [{ provide: StriveCdkStepper, useExisting: StepperComponent }]
})
export class StepperComponent extends StriveCdkStepper {

  constructor(changeDetectorRef: ChangeDetectorRef) {
    super(changeDetectorRef);
  }

}
