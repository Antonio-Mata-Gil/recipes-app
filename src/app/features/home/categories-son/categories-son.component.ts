import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesApiResponse } from 'src/app/core/services/recipes.models';

@Component({
  selector: 'app-categories-son',
  templateUrl: './categories-son.component.html',
  styleUrls: ['./categories-son.component.scss'],
})
export class CategoriesSonComponent  implements OnInit {
  @Input() public CategoriesList?: CategoriesApiResponse[] = [];


  constructor(private router: Router) { }

  ngOnInit() {}
  goToCategories(category: CategoriesApiResponse) {
    this.router.navigate(['/tabs/categories/category-details', category.category]);
    
  }
}
