import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { RecipesApiResponse } from 'src/app/core/services/recipes.models';

@Component({
  selector: 'app-edit-recipe',
  templateUrl:'./edit-recipe.page.html',
  styleUrls: ['./edit-recipe.page.scss'],
})
export class EditRecipePage implements OnInit {
  public recipe?: RecipesApiResponse;

  constructor(private router: Router, private apiService: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe((params)=>{
      const recipeid = params['id'];
      this.apiService.getRecipeById(recipeid).subscribe((info )=>{
        this.recipe= info[0];
                
      })
    })
  }
  cancel(recipe?: RecipesApiResponse) {
    this.router.navigate(['/tabs'])
  }
}
