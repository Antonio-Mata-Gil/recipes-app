import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { RecipesApiResponse } from 'src/app/core/services/recipes.models';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {
  recipes: RecipesApiResponse[] = [];
  category: string = '';
  constructor(private apiService: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || ''; 
      
      this.loadRecipesByCategory(this.category); 
    });
  }

  loadRecipesByCategory(category: string): void {
    this.apiService.getRecipe().subscribe(recipes => {
      this.recipes = recipes.filter(recipe => recipe.category === category);
      
    });
  }

  handleRefresh(ev: any) {
    this.loadRecipesByCategory(this.category); 
    setTimeout(() => {
      ev.target.complete();
    }, 1000);
  }
}
