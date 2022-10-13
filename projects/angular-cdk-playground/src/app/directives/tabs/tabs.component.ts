import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { TabChangeEvent } from '@strivestudio/angular-cdk';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class TabsComponent {

  lastTabChange: TabChangeEvent | undefined;

  constructor() { }

}
