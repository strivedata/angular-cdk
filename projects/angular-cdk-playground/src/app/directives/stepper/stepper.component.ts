import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StriveCdkStepper } from '@strivestudio/angular-cdk';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
})
export class StepperComponent extends StriveCdkStepper implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void { }

}
