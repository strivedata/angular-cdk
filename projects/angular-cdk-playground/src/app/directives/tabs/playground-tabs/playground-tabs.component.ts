import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StriveCdkStepper, TabGroupDirective, UIXTabGroup } from '@strivestudio/angular-cdk';

@Component({
  selector: 'app-playground-tabs',
  templateUrl: './playground-tabs.component.html',
  providers: [{ provide: UIXTabGroup, useExisting: PlaygroundTabsComponent }],
})
export class PlaygroundTabsComponent extends UIXTabGroup implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void { }

}
