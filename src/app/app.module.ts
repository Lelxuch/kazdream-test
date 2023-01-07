import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';

import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SectionsComponent} from './sections/sections.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SectionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzMessageModule,
    NzBreadCrumbModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }