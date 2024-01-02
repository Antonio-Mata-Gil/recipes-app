import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeFormComponent } from './component/recipe-form/recipe-form.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [RecipeFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
  ],
 
  exports: [
    RecipeFormComponent
  ]
})
export class SharedModule { }
