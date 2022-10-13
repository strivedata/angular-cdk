import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StriveCdkStepper } from '@strivestudio/angular-cdk';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  providers: [{ provide: StriveCdkStepper, useExisting: StepperComponent }]
})
export class StepperComponent extends StriveCdkStepper implements OnInit {

  constructor() {
    super();
    this.selectedStepChange.subscribe(next => console.log(next));
  }

  ngOnInit(): void { }

}
