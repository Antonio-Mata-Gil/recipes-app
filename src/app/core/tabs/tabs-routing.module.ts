import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren:() => import( '../../features/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'categories',
        loadChildren:() => import( '../../features/categories/categories.module').then( m => m.CategoriesPageModule)
      },
      {
        path: 'recipes',
        loadChildren:() => import( '../../features/recipes/recipes.module').then( m => m.RecipesPageModule)
      },
      {
        path: 'my-recipes',
        loadChildren:() => import( '../../features/my-recipes/my-recipes.module').then( m => m.MyRecipesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
