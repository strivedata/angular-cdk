import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'strive-switch',
  templateUrl: './switch.component.html'
})
export class SwitchComponent implements OnInit {

  @Input() checked = false;
  @Input() disabled = false;
  @Input() color = 'primary';
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() { }

  get bgColorClass(): string {
    return `bg-${this.color}-600`;
  }

  ngOnInit(): void { }

}
