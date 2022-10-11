import { Component, Input, OnInit, TemplateRef, ViewChild, forwardRef, Inject, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { StriveCdkStepper } from './stepper.directive';

@Component({
  selector: 'scdk-step',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StriveCdkStep implements OnInit {

  @ViewChild(TemplateRef, { static: true }) content: TemplateRef<any> | null = null;

  @Input() state: any;

  constructor(

  ) { }

  ngOnInit(): void { }

}
