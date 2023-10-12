import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TabsPageModule } from './tabs/tabs.module';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule.forRoot(),
    
    
  ],
  exports: [
    NavComponent
  ]
})
export class CoreModule { }
