import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html'
})
export class ToggleComponent implements OnInit {

  switchValue: boolean = false;

  constructor() { }

  ngOnInit(): void { }

}
