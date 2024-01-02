import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { RecipesApiResponse, Step } from 'src/app/core/services/recipes.models';
import { Storage, ref } from '@angular/fire/storage'
import { getDownloadURL, listAll, uploadBytes } from 'firebase/storage';
@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {

  @Input() public recipe?: RecipesApiResponse;
  public recipeId!: string;
  public recipeForm?: FormGroup;
  public steps: any[] = [{}];
  public file: any = [];
  public imgLink: string = '';
  async presentAlert() {
    if (this.recipeForm?.valid) {
      const alert = await this.alertController.create({
        header: 'Receta Subida',
        message: 'Tu receta ha sido subida con éxito',
        buttons: [
          {
            text: 'Volver al home',
            handler: () => {
              if(this.recipeId){
                this.router.navigate(['/tabs']);
              }else{
                this.modalCtrl.dismiss(null, 'cancel');
              }
              



            }
          }
        ]
      });

      await alert.present();
    }
  }

  async deleteAlert(recipeId: string) {
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
              this.deleteRecipe(recipeId);
            }
          }
        ]
      });

      await alert.present();
    }
  }

  constructor(private fb: FormBuilder, private recipeService: ApiServiceService, private route: ActivatedRoute, private router: Router, private alertController: AlertController, private modalCtrl: ModalController, private storage: Storage) { }

  ngOnInit() {
    this.recipeForm = this.fb.group({
      img: new FormControl(this.imgLink || 'no'),
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
    if (this.recipe && this.recipe.steps) {
      this.route.params.subscribe((params) => {
        this.recipeId = params['id'];
        this.recipeService.getRecipeById(this.recipeId).subscribe((info) => {
          this.recipe = info[0];
        })
      })

    }
    this.imgUrl()
  }
  async imgUrl() {

    const imgRef = ref(this.storage, `imagen/${this.recipeForm?.value.title}`);
    const response = await listAll(imgRef);
    
    

    if (response.items.length > 0) {
      const lastItem = response.items[response.items.length - 1];
      this.imgLink = await getDownloadURL(lastItem);
      
    } else {
      console.log('No se encontraron imágenes en la carpeta.');
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
    this.imgUrl() 
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
  
  OnclickImg($event: any) {
    this.file = $event.target.files[0];
    this.uploadImage(this.file)  
  }
 

  public imgValue =  this.recipeForm?.value.img;
  uploadImage(file: any) {


    if (this.recipeForm?.controls['title'].status === 'VALID') {
     
      const imgRef = ref(this.storage, `imagen/${this.recipeForm?.value.title}/${file.name}`);
      uploadBytes(imgRef, file);
   
    }
    else{
      console.log('El campo "title" debe estar relleno antes de subir la imagen.');
      const imgInput = document.getElementById('inputImg') as HTMLInputElement;
      imgInput.value = '';
    }
    return;
  }

 
  

  onSubmit() {
   
    if (this.recipeForm?.valid) {
      const recipeData = this.recipeForm?.value;
      
      

      if (this.recipeId) {
        this.imgUrl()
        this.recipeService.editRecipes(this.recipeId, { ...recipeData, img: this.imgLink });
       
      } else {
        this.imgUrl()
        this.recipeService.addReceipes({ ...recipeData, img: this.imgLink });
      }
    }
    else{
      console.log('formulario no valido' );
      console.log(this.recipeForm);
      
      
    }
  }
  deleteRecipe(recipeId: string) {
    const response = this.recipeService.deleteRecipeById(recipeId);


    this.router.navigate(['/tabs']);
  }



}
