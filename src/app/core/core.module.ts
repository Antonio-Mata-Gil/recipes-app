import { HeaderComponent } from 'src/app/core/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule.forRoot(),
    
    
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
