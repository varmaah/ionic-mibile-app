import { Injectable } from '@angular/core';
import { Recipe } from './recepies.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      ingredients: ['French Fries', 'Meat', 'salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Spaghetti_alla_Carbonara.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return{
    ...this.recipes.find(recipe => recipe.id === recipeId)
    };
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipeId !== recipe.id);
  }
}
