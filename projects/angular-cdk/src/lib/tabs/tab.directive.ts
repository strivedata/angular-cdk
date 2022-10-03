import {
  AfterViewInit,
  Directive,
  EmbeddedViewRef,
  Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { TabGroupDirective } from './tab-group.directive';

@Directive({
  selector: '[tab]'
})
export class TabDirective implements AfterViewInit {

  @Input() tabItemDisabled = false;

  public selected = false;
  private element!: HTMLElement;
  private view!: EmbeddedViewRef<any>;
  public context = { selected: false };

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
    private tabGroup: TabGroupDirective
  ) { }

  ngAfterViewInit() {
    this.view = this.viewContainerRef.createEmbeddedView(this.templateRef, {
      $implicit: this.context
    });
    this.element = this.view.rootNodes[0]; // reference to the native DOM element
    this.initListeners(this.element);
  }

  /**
   * Returns the index of this tab in the group (starting with '0').
   */
  get index(): number {
    return Array.prototype.indexOf.call(
      this.element.parentElement?.children,
      this.element
    );
  }

  select(): void {
    this.context.selected = true;
  }

  unselect(): void {
    this.context.selected = false;
  }

  private initListeners(element: HTMLElement): void {
    this.renderer.listen(element, 'click', (event) => {
      if (this.tabItemDisabled) {
        event.preventDefault();
        return;
      }
      this.tabGroup.selectTab(this.index);
    });
  }

}
