import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { BaseComponent } from './components/base/base.component';
import { Widget1Component } from './widget1/widget1.component';
import { Widget2Component } from './widget2/widget2.component';
import { Widget3Component } from './widget3/widget3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ErrorComponent,
    NoDataComponent,
    BaseComponent,
    Widget1Component,
    Widget2Component,
    Widget3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
