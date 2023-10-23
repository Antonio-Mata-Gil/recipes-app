import { Pipe, PipeTransform } from '@angular/core';
import { RecipesApiResponse } from '../core/services/recipes.models';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(ApiRecipes: RecipesApiResponse [], text: string): RecipesApiResponse []  {
  if(text === ''){
    return ApiRecipes
  }   
  return ApiRecipes.filter( recipes => {
    return recipes.title.toLowerCase().includes(text.toLowerCase())
  })
    return ApiRecipes;
  }

}
