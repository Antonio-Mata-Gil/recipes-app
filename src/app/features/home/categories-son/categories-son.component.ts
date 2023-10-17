import { Component, Input, OnInit } from '@angular/core';
import { CategoriesApiResponse } from 'src/app/core/services/recipes.models';

@Component({
  selector: 'app-categories-son',
  templateUrl: './categories-son.component.html',
  styleUrls: ['./categories-son.component.scss'],
})
export class CategoriesSonComponent  implements OnInit {
  @Input() public CategoriesList?: CategoriesApiResponse[] = [];


  constructor() { }

  ngOnInit() {}

}
