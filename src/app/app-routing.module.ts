import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from "./core/guards/auth.guard";
import {SectionsComponent} from "./sections/sections.component";

const routes: Routes = [
  {path: '', component: SectionsComponent, canActivate: [AuthGuard],
    children: [
      {path: 'products', loadChildren: () => import('./sections/products/products.module').then(m => m.ProductsModule)},
    ]
  },
  {path: '', loadChildren: () => import('./sections/auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
