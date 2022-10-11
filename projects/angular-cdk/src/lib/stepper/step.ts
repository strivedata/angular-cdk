import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { StriveCdkStepper } from './stepper';

@Component({
  selector: 'scdk-step',
  exportAs: 'scdkStep',
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

  @Input() label: string | undefined;

  @Input() completed = false;

  get isSelected(): boolean {
    return this.stepper.selectedStep === this;
  }

  constructor(private stepper: StriveCdkStepper) { }

  ngOnInit(): void { }

  /**
   * Makes this step the currently selected step.
   */
  select(): void {
    this.stepper.selectedStep = this;
  }

  reset(): void {
    this.completed = false;
  }

  complete(): void {
    this.completed = true;
  }

}
