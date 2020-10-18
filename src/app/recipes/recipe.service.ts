import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spinach',
      'Cooking spinach is very easy: do the following...',
      'https://www.farmflavor.com/wp-content/uploads/2020/05/iStock-916931074-2-scaled.jpg'
    ),
    new Recipe(
      'Lasagne',
      'Preparing lasagne is not that easy, but you can always try! Good luck!',
      'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}