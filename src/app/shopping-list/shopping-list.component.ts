import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private ingredientChangeSubScription: Subscription;
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientChangeSubScription =
      this.shoppingListService.ingredientsChanged
        .subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients );
  }

  ngOnDestroy() {
    this.ingredientChangeSubScription.unsubscribe();
  }

  onIngredientAdd(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

  onEditItem(ingredient: Ingredient, index: number) {
    ingredient.id = index;
    this.shoppingListService.startedEditing.next(ingredient);
  }
}
