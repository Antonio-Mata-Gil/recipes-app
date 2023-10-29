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

    public getRecipeId(id: string): Observable<RecipesApiResponse> {
      return this.http.get<RecipesApiResponse>(`${this.url}/recipes/${id}`);
    }  
    
    public getCategories(): Observable<CategoriesApiResponse[]>{
      return this.http.get<CategoriesApiResponse[]>(`${this.url}/categories`)
    }
    public createRecipe(recipe: RecipesApiResponse): Observable<RecipesApiResponse[]>{
      return this.http.post<RecipesApiResponse[]>(`${this.url}/recipes`, recipe)
    }
    public editRecipe (id:string, recipe: RecipesApiResponse): Observable<RecipesApiResponse[]>{
      return this.http.put<RecipesApiResponse[]>(`${this.url}/recipes/${id}`, recipe)
    }
    public deleteRecipe (id: string): Observable <RecipesApiResponse>{
      return this.http.delete<RecipesApiResponse>(`${this.url}/recipes/${id}`);
    }
}
