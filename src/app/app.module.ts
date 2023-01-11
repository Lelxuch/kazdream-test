import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';

import {NgxsModule} from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzTypographyModule} from 'ng-zorro-antd/typography';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SectionsComponent} from './sections/sections.component';
import {ProductState} from 'src/app/core/store/state/product.state';

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
    NzBreadCrumbModule,
    NzTypographyModule,
    NgxsModule.forRoot([ProductState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
