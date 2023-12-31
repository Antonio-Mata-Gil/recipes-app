import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './homePage';
import { CategoryDetailsPageModule } from '../category-details/category-details.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
