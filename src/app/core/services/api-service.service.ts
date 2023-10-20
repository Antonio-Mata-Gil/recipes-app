import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CategoriesApiResponse, RecipesApiResponse } from './recipes.models';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private url: String = 'https://65293e9955b137ddc83e71cd.mockapi.io';

  constructor(private http: HttpClient) {}

   public getRecipes(): Observable<RecipesApiResponse[]>{
      return this.http.get<RecipesApiResponse[]>(`${this.url}/recipes`)
    }
  
    
    public getCategories(): Observable<CategoriesApiResponse[]>{
      return this.http.get<CategoriesApiResponse[]>(`${this.url}/categories`)
    }
}
