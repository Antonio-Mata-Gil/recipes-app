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
    this.apiService.getRecipe().subscribe(recipes => {
      this.myRecipes = recipes.filter(recipe => recipe.mine === true);
      
    });
  }

  handleRefresh(ev: any) {
    this.getRecipesList();
    setTimeout(() => {
      ev.target.complete();
    }, 1000);
  }
}
