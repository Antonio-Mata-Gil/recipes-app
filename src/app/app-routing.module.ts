import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./core/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    loadChildren: () => import('./features/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./features/recipes/recipes.module').then( m => m.RecipesPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./features/form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'my-recipes',
    loadChildren: () => import('./features/my-recipes/my-recipes.module').then( m => m.MyRecipesPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./core/tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
