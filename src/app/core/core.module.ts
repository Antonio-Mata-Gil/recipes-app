import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    NavComponent
  ]
})
export class CoreModule { }
