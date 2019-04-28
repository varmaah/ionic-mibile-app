import { RecipesService } from './recipes.service';
import { Recipe } from './recepies.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss'],
})
export class RecepiesPage implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipesService) {
   }

  ngOnInit() {
    console.log('cxvx');
  }

  ionViewWillEnter() {
    this.recipes = this.recipeService.getAllRecipes();
   }

}
