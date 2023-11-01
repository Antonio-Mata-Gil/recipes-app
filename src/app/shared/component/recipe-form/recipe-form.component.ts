import {  Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { RecipesApiResponse, Step } from 'src/app/core/services/recipes.models';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {
  @Input() public recipe?: RecipesApiResponse;
  public recipeForm?: FormGroup;
  public steps: any[] = [{}]; 
  async presentAlert() {
    if(this.recipeForm?.valid){
      const alert = await this.alertController.create({
        header: 'Receta Subida',
        message: 'Tu receta ha sido subida con éxito',
        buttons: [
          {
            text: 'Volver al home',
            handler: () => {
              this.modalCtrl.dismiss(null, 'cancel');
            
             
   
            }
          }
        ]
      });
  
      await alert.present();
    }
    }

    async deleteAlert(recipe:RecipesApiResponse) {
      if (this.recipe) {
        const alert = await this.alertController.create({
          header: 'Se eliminará la receta',
          message: '¿Estás seguro de que deseas eliminar esta receta?',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              handler: () => {
              }
            },
            {
              text: 'Sí',
              handler: () => {
                this.deleteRecipe(recipe);
              }
            }
          ]
        });
  
        await alert.present();
      }
    }
   
  constructor( private fb: FormBuilder, private recipeService: ApiServiceService, private router: Router, private alertController: AlertController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.recipeForm = this.fb.group({
      img: new FormControl(this.recipe?.img || '', [Validators.required]),
      title: new FormControl(this.recipe?.title || '', [Validators.maxLength(50)]),
      description: new FormControl(this.recipe?.description || '', [Validators.maxLength(150)]),
      category: new FormControl(this.recipe?.category || '', [Validators.required]),
      time: new FormControl(this.recipe?.time || '', [Validators.required]),
      ingredientes: this.fb.array([]), 
      steps: this.fb.array([]), 
      mine: new FormControl(true),
    });

    if (this.recipe && this.recipe.ingredientes) {
      this.recipe.ingredientes.forEach(ingrediente => {
        this.addIngredient(ingrediente.nombre, ingrediente.cantidad);
      });
    }
    if (this.recipe && this.recipe.steps) {
      this.recipe.steps.forEach((step: Step, index) => {
        this.addStep(step.step);
        this.getStep.at(index).get('number')?.setValue(index + 1);
      });
    }
  }
  get getIngredients() {
    return this.recipeForm?.get('ingredientes') as FormArray;
  }
  
  addIngredient(nombre: string = '', cantidad: string = '') {
    const ingredientGroup = this.recipeForm?.get('ingredientes') as FormArray;
    ingredientGroup.push(this.createIngredientGroup(nombre, cantidad));
  }

  createIngredientGroup(nombre: string = '', cantidad: string = '') {
    return this.fb.group({
      nombre: [nombre, Validators.required],
      cantidad: [cantidad, Validators.required],
    });
  }

  removeLastIngredient() {
    const ingredientGroup = this.recipeForm?.get('ingredientes') as FormArray;
    if (ingredientGroup.length > 0) {
      ingredientGroup.removeAt(ingredientGroup.length - 1);
    }
  }

 get getStep() {
    return this.recipeForm?.get('steps') as FormArray;
  }

  addStep(stepText: string = '') {
    const stepNumber = this.getStep.length + 1;
    const stepGroup = this.createStepGroup(stepNumber, stepText);
    this.getStep.push(stepGroup);
  }
  
  updateStepNumbers() {
    const stepControls = this.getStep.controls;
    for (let i = 0; i < stepControls.length; i++) {
      stepControls[i].get('number')?.setValue(i + 1);
    }
  }
  createStepGroup(stepNumber: number, stepText: string = '') {
    return this.fb.group({
      number: stepNumber,
      step: [stepText, Validators.required],
    });
  }
  removeLastStep() {
    const stepGroup = this.getStep;
    if (stepGroup.length > 0) {
      stepGroup.removeAt(stepGroup.length - 1);
    }
  }

  onSubmit() {
    console.log(this.recipeForm);
    
    if (this.recipeForm?.valid) {
      const recipeData = this.recipeForm.value;
      const request = this.recipe
        ? this.recipeService.editRecipe(this.recipe.id, recipeData)
        : this.recipeService.createRecipe(recipeData);
  
      request.subscribe((recipe: RecipesApiResponse[]) => {
        this.recipeForm?.reset();
      });
    }
  }
  deleteRecipe(recipe: RecipesApiResponse){
    this.recipeService.deleteRecipe(recipe.id).subscribe(()=>{
      this.router.navigate(['/tabs'])
    })
  }
  
 
  
}
