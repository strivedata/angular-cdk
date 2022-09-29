import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StriveAngularCdkSwitchModule } from '@strivestudio/angular-cdk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StriveAngularCdkSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
