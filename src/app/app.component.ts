import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, IonRouterOutlet } from '@ionic/angular';
import { Location } from '@angular/common';

import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, { static: true }) routerOutlet: IonRouterOutlet | any;
  constructor(private platform: Platform, private alertController: AlertController, private location: Location) {

    this.backButtonEvent()

  }
  backButtonEvent(){
    this.platform.backButton.subscribeWithPriority(10, () => {
     if(!this.routerOutlet.canGoBack()){
      this.backButtonAlert()
     } else{
      this.location.back()
     }
      
    });
  }
  
  async backButtonAlert(){
    const alert = await this.alertController.create({
      message: '¿Quieres salir de MyRecipes?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Salir',
        handler: () =>{
          App.exitApp()
        }
      }]
    });
    await alert.present();
  }
  
}
