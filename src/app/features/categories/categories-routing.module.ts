import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage,
    pathMatch: 'full'
  },
  {
    path: 'category-details/:category',
    loadChildren: () => import('../../features/category-details/category-details.module').then(m => m.CategoryDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule { }
