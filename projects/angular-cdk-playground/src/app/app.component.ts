import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  switchValue: boolean = false;
  singleSelectValue: string | undefined;
  multiSelectValue: string[] = [];

  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      singleSelectValue: null,
      multiSelectValue: null
    });
    // Log form changes
    this.form.valueChanges.subscribe(next => {
      console.log('Form Value:', next);
      console.log('Valid:', this.form.valid);
    })
  }

}
