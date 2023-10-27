import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { CategoriesApiResponse } from 'src/app/core/services/recipes.models';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  public ApiCategories?: CategoriesApiResponse[] = [];

  constructor(private recipesApi: ApiServiceService) { }

  ngOnInit() {
    this.getCategoriesList();
  }
  public getCategoriesList() {
    this.recipesApi.getCategories().subscribe(categories => {
      this.ApiCategories = categories;

    });
}
}
