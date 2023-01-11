import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from '@angular/forms';

import {NzInputModule} from 'ng-zorro-antd/input';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzTypographyModule} from 'ng-zorro-antd/typography';

import {DefaultPageComponent} from './pages/default-page/default-page.component';
import {ProductInfoComponent} from './components/product-info/product-info.component';

const routes: Routes = [
  {path: "", component: DefaultPageComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [
    DefaultPageComponent,
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NzInputModule,
    NzListModule,
    NzTabsModule,
    NzButtonModule,
    NzLayoutModule,
    NzSpaceModule,
    NzTypographyModule,
  ]
})
export class ProductsModule { }
