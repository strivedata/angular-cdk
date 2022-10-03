import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tabPanel]'
})
export class TabPanelDirective {

  constructor(
    public viewContainer: ViewContainerRef,
    public templateRef: TemplateRef<any>
  ) { }

  activate(): void {
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  clear(): void {
    this.viewContainer.clear();
  }

}
