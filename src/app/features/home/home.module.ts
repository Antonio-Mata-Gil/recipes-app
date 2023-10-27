import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './homePage';

import { HomePageRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { CategoriesSonComponent } from './categories-son/categories-son.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule,
    CoreModule
  ],
  declarations: [HomePage, CategoriesSonComponent]
})
export class HomePageModule {}
