import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(private recipeServices: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipeServices.getAllRecipes();
  }

  ionViewWillEnter(): void {
    this.recipes = this.recipeServices.getAllRecipes();
  }

  getRecipe(recipeId: string) {
    console.log(recipeId);
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipeServices.deleteRecipe(recipeId);
  }

}
