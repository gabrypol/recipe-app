import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spinach',
      'Cooking spinach is very easy: do the following...',
      'https://www.farmflavor.com/wp-content/uploads/2020/05/iStock-916931074-2-scaled.jpg',
      [
        new Ingredient('Spinach', 1),
        new Ingredient('Onion', 3)
      ]
    ),
    new Recipe(
      'Lasagne',
      'Preparing lasagne is not that easy, but you can always try! Good luck!',
      'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
      [
        new Ingredient('Meat', 50),
        new Ingredient('Pasta', 100)
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}