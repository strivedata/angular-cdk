import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html'
})
export class StepperComponent {

  form: FormGroup;

  get stepperForm(): AbstractControl | null {
    return this.form.get('steps');
  }

  get name(): string {
    return this.stepperForm?.get('0')?.get('name')?.value;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      steps: formBuilder.array([
        formBuilder.group({
          name: [null, Validators.required]
        }),
        formBuilder.group({
          address: [null]
        })
      ])
    });
  }

}
