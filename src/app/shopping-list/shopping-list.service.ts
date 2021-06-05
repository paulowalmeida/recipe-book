import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../shared/models/ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService {

  @Output()
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients:Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10),
    new Ingredient('Garlic', 2),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}