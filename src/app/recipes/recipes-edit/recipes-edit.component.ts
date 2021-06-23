import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/shared/services/recipe/recipe.service';
import { filter, map } from 'rxjs/operators';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id: number;
  isEditMode = false;
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.isEditMode = !!params['id'];

        if (this.isEditMode) {
          this.recipe = this.recipeService.getRecipeById(+params['id']);
        }
      });
  }

}
