import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SectionsComponent} from "./sections/sections.component";

const routes: Routes = [
  {path: '', component: SectionsComponent,
    children: [
      {path: '', loadChildren: () => import('./sections/products/products.module').then(m => m.ProductsModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
