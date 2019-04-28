import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecepiesPage } from './recepies.page';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

const routes: Routes = [
  {
    path: '',
    component: RecepiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecepiesPage, RecipeItemComponent]
})
export class RecepiesPageModule {}
