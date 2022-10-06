import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent implements OnInit {

  @Input() title: string = 'No Title';
  @Input() description?: string;
  @Input() section?: string;

  constructor() { }

  ngOnInit(): void { }

}
