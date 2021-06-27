import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  newIngredientForm: FormGroup;
  subscription: Subscription;
  ingredient: Ingredient;
  editMode: boolean;

  constructor(
    private shoppingListService: ShoppingListService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.onEditItem();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isFieldValid(fieldName: string, validator: string) {
    const control = this.newIngredientForm.get(fieldName);
    return !control.valid && control.touched && control.errors[validator];
  }

  getLabelActionButton() {
    return this.editMode
      ? 'Update'
      : 'Add';
  }

  onActionButtonClicked() {
    const { value: { amount, name } } = this.newIngredientForm;

    const ingredient = new Ingredient(
      name,
      amount,
      this.ingredient?.id ?? null
    );

    this.editMode
      ? this.shoppingListService.updateIngredient(ingredient)
      : this.shoppingListService.addIngredient(ingredient);

    this.onClear();
  }

  onClear() {
    this.newIngredientForm.reset();
    this.ingredient = null;
    this.editMode = false;
  }

  onDeleteItem() {
    this.shoppingListService.deleteIngredient(this.ingredient.id);
    this.onClear();
  }

  private createForm() {
    this.newIngredientForm = this.formBuilder.group({
      'name': new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ),
      'amount': new FormControl(
        null,
        [
          Validators.required,
          Validators.min(1)
        ]
      )
    });
  }

  private onEditItem() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(ingredient => {
      this.ingredient = ingredient;
      this.editMode = true;

      this.newIngredientForm.setValue({
        name: this.ingredient.name,
        amount: this.ingredient.amount
      });
    });
  }
}
