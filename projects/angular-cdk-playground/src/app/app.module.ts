import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StriveAngularCdkModule } from '@strivestudio/angular-cdk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StriveAngularCdkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
