import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UIXTabGroup } from '@strivestudio/angular-cdk';

@Component({
  selector: 'app-custom-tabs',
  templateUrl: './custom-tabs.component.html',
  providers: [{ provide: UIXTabGroup, useExisting: CustomTabsComponent }],
})
export class CustomTabsComponent extends UIXTabGroup implements OnInit {

  constructor(changeDetectorRef: ChangeDetectorRef) {
    super(changeDetectorRef);
  }

  ngOnInit(): void { }

}
