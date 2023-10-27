import { Step } from './../../core/services/recipes.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { RecipesApiResponse } from 'src/app/core/services/recipes.models';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  public recipe: RecipesApiResponse | null = null;
  public ingredientOn: boolean = true 
  public recipeDetails: RecipesApiResponse [] = [];

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');

    if (recipeId) {
      const numericRecipeId = recipeId
      this.apiService.getRecipes().subscribe(recipes => {
        this.recipe = recipes.find(recipe => recipe.id === numericRecipeId) || null; 
         console.log(this.recipe);        
         
      });
    }
  }
  public segmentSelect(event:any){
    const selectedSegment = event.detail.value


    if(selectedSegment === "Ingredeintes"){
      this.ingredientOn = true
    }
    else if ( selectedSegment === "Preparacion" ){
      this.ingredientOn = false
    }
  }
 
}
