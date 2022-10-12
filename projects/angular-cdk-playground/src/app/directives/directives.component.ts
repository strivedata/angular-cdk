import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html'
})
export class DirectivesComponent implements OnInit {

  switchValue: boolean = false;
  singleSelectValue: string | undefined;
  multiSelectValue: string[] = [];

  form: FormGroup;

  get stepperForm(): AbstractControl | null {
    return this.form.get('steps');
  }

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      singleSelectValue: null,
      multiSelectValue: null,
      selectedTab: 2,
      steps: formBuilder.array([
        formBuilder.group({
          name: [null, Validators.required]
        }),
        formBuilder.group({
          address: [null]
        })
      ])
    });
    // Log form changes
    this.form.valueChanges.subscribe(next => {
      console.log('Form Value:', next);
      console.log('Valid:', this.form.valid);
    })
  }

  ngOnInit(): void { }

}
