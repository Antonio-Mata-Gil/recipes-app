import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FormPageModule } from 'src/app/features/form/form.module';
import { FormPage } from 'src/app/features/form/form.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  goToCategories() {
    this.router.navigate(['/tabs/categories']);
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: FormPage, 
    });
    modal.present();
  
    const { data, role } = await modal.onWillDismiss();
  }
}
