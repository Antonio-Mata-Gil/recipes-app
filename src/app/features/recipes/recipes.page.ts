import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { RecipesApiResponse } from 'src/app/core/services/recipes.models';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  public ApiRecipes?: RecipesApiResponse[] = [];

  constructor(private recipesApi: ApiServiceService,) { }

  ngOnInit() {
    this.getRecipesList();
  }
  public getRecipesList() {
    this.recipesApi.getRecipes().subscribe(recipes => {
      this.ApiRecipes = recipes;
      
    });
}
}