import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeBoxComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Input() showCode = false;
  
  @ViewChild('content') content!: ElementRef;

  code: string = '';

  constructor() { }

  ngOnInit(): void { }

  ngAfterContentInit(): void {
  }

  ngAfterViewInit(): void {
    this.code = this.content.nativeElement.innerHTML;
  }

  copyToClipBoard() {
    throw new Error('Method not implemented.');
  }

}
