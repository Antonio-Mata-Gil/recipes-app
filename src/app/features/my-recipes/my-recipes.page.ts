import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { RecipesApiResponse } from 'src/app/core/services/recipes.models';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.page.html',
  styleUrls: ['./my-recipes.page.scss'],
})
export class MyRecipesPage implements OnInit {
  public myRecipes: RecipesApiResponse [] = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getRecipesList();
  }
  public getRecipesList() {
    this.apiService.getRecipes().subscribe(recipes => {
      this.myRecipes = recipes.filter(recipe => recipe.mine === true);
      
    });
  }
}
