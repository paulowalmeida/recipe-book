import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { RecipeService } from 'src/app/shared/services/recipe/recipe.service';
import { ShoppingListService } from 'src/app/shared/services/shopping-list/shopping-list.service';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    
  }

  addIngredientToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
