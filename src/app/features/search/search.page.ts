import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { RecipesApiResponse } from 'src/app/core/services/recipes.models';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public ApiRecipes?: RecipesApiResponse[] = [];

  constructor(private recipesApi: ApiServiceService) { }

  ngOnInit() {
    this.getRecipesList();
  }
  public getRecipesList() {
    this.recipesApi.getRecipe().subscribe(recipes => {
      this.ApiRecipes = recipes;
      
    });
}

}
