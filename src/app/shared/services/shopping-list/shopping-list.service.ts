import { EventEmitter } from "@angular/core";
import { Ingredient } from "../../models/ingredient.model";

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10),
    new Ingredient('Garlic', 2),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.emitIngredientsChanged();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.emitIngredientsChanged();
  }

  private emitIngredientsChanged() {
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
