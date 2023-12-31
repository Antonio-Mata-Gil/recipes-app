import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { CategoriesApiResponse, RecipesApiResponse } from 'src/app/core/services/recipes.models';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public ApiRecipes?: RecipesApiResponse[] = [];
  public filteredRecipes?: RecipesApiResponse[]=[];
  public ApiCategories?: CategoriesApiResponse[] = [];

  constructor(private recipesApi: ApiServiceService, ) { }

  ngOnInit(): void {
    this.getRecipesList();
    this.getCategoriesList();
  }

  public getRecipesList() {
    this.recipesApi.getRecipe().subscribe(recipes => {
      this.ApiRecipes = recipes;
      this.filteredRecipes = this.ApiRecipes.slice(0, 10)
      this.segmentChanged(event)
    });
  }
  public getCategoriesList() {
    this.recipesApi.getCategories().subscribe(categories => {
      this.ApiCategories = categories;

    });
  }
  public segmentChanged(event:any){
    if (!this.ApiRecipes) {
      return
    }
    if (!event || !event.detail) {
      return;
    }
    const selectedSegment = event.detail.value
    
    
    if (selectedSegment === 'Popular') {
      this.filteredRecipes = this.ApiRecipes.slice(0, 10);
    } else if (selectedSegment === 'new') {
      this.filteredRecipes = this.ApiRecipes.slice(-10);
    } else if (selectedSegment === 'My-recipes') {
      this.filteredRecipes = this.ApiRecipes.filter(recipe => recipe.mine === true);
      if (this.filteredRecipes.length === 0) {
        this.filteredRecipes = []; 
      }
    }
  }
  handleRefresh(ev: any) {
    this.getRecipesList();
    setTimeout(() => {
      ev.target.complete();
    }, 1000);
  }
  
  
}
