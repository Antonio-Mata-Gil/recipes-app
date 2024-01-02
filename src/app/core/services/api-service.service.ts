import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { CategoriesApiResponse, RecipesApiResponse } from './recipes.models';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { DocumentData, DocumentReference, DocumentSnapshot, addDoc, collection, deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {



  constructor(private http: HttpClient, private firestore: Firestore) {}

    public getCategories(): Observable<RecipesApiResponse[]>{
      const categoryRef = collection(this.firestore, 'Categorias');
      return collectionData(categoryRef, {idField: 'id'}) as Observable<RecipesApiResponse[]>
    }
    public addReceipes (recipe: RecipesApiResponse){
      const recipeRef = collection(this.firestore, 'recipes');
      return addDoc(recipeRef, recipe)
    }
    public getRecipe(): Observable<RecipesApiResponse[]>{
      const recipeRef = collection(this.firestore, 'recipes');
      return collectionData(recipeRef, {idField: 'id'}) as Observable<RecipesApiResponse[]>
    }
    public getRecipeById(id: string): Observable<RecipesApiResponse[]> {
      const recipeRef = collection(this.firestore, 'recipes');
      const documentRef: DocumentReference<DocumentData> = doc(recipeRef, id);
        return from(getDoc(documentRef)).pipe(
        map((snapshot: DocumentSnapshot<DocumentData>) => {
          const data = snapshot.data() as RecipesApiResponse;
          return [data];
        })
      );
    }
    public editRecipes(recipeId: string, recipe: RecipesApiResponse) {
      const recipeDocRef = doc(this.firestore, 'recipes', recipeId);
      return setDoc(recipeDocRef, recipe, { merge: true });
    }

    public deleteRecipeById(id: string) {
     const recipeId =  doc(this.firestore, `recipes/${id}`);
     return deleteDoc(recipeId)
    }
}
