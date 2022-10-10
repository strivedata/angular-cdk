import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html'
})
export class DirectivesComponent implements OnInit {

  switchValue: boolean = false;
  singleSelectValue: string | undefined;
  multiSelectValue: string[] = [];

  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      singleSelectValue: null,
      multiSelectValue: null,
      selectedTab: 2
    });
    // Log form changes
    this.form.valueChanges.subscribe(next => {
      console.log('Form Value:', next);
      console.log('Valid:', this.form.valid);
    })
  }

  ngOnInit(): void { }

}
