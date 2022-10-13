import { Component, OnInit } from '@angular/core';
import { UIXToggle } from '@strivestudio/angular-cdk';

@Component({
  selector: 'app-custom-toggle',
  templateUrl: './custom-toggle.component.html'
})
export class CustomToggleComponent extends UIXToggle {

  constructor() {
    super();
  }

}
