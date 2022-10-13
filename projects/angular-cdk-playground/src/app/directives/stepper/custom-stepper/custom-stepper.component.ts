import { ChangeDetectorRef, Component } from '@angular/core';
import { UIXStepper } from '@strivestudio/angular-cdk';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  providers: [{ provide: UIXStepper, useExisting: CustomStepperComponent }]
})
export class CustomStepperComponent extends UIXStepper {

  constructor(changeDetectorRef: ChangeDetectorRef) {
    super(changeDetectorRef);
  }

}
