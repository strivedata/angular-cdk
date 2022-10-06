import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CodeBoxComponent } from './components/code-box/code-box.component';
import { ToggleSelectModule } from '@strivestudio/angular-cdk';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    PageComponent,
    PageHeaderComponent,
    CodeBoxComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    ToggleSelectModule
  ],
  exports: [
    PageComponent,
    PageHeaderComponent,
    CodeBoxComponent
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ]
})
export class PageModule { }
