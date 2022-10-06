import { Component, Input, OnInit, TemplateRef, ViewChild, forwardRef, Inject, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Stepper } from './stepper.directive';

@Component({
  selector: 'step',
  template: '<ng-template><ng-content></ng-content></ng-template>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent implements OnInit {

  @ViewChild(TemplateRef, { static: true }) content: TemplateRef<any> | null = null;

  @Input() state: any;

  constructor(
    
  ) { }

  ngOnInit(): void { }

}
