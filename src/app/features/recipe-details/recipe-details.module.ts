import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeDetailsPageRoutingModule } from './recipe-details-routing.module';

import { RecipeDetailsPage } from './recipe-details.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeDetailsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [RecipeDetailsPage]
})
export class RecipeDetailsPageModule {}
