import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './homePage';

import { HomePageRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { CategoriesSonComponent } from './categories-son/categories-son.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule
  ],
  declarations: [HomePage, CategoriesSonComponent]
})
export class HomePageModule {}
