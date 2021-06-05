import { EventEmitter, Output } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

  @Output()
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a simply test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
      ),
    new Recipe(
      'Another test Recipe',
      'This is a simply test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
      )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
