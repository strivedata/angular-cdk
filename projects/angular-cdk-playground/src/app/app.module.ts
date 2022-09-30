import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StriveSingleSelectModule, StriveToggleSelectModule } from '@strivestudio/angular-cdk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StriveToggleSelectModule,
    StriveSingleSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
