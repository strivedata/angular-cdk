import { Component, OnInit } from '@angular/core';
import { Stepper } from '@strivestudio/angular-cdk';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html'
})
export class StepperComponent extends Stepper implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void { }

}
