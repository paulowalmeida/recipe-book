import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10),
    new Ingredient('Garlic', 2),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdd(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
