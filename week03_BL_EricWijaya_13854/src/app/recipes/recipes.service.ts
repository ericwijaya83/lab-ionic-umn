import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  uri = 'http://localhost:4000/recipes';

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://i1.wp.com/resepkoki.id/wp-content/uploads/2016/12/Resep-Gado-Gado.jpg?fit=2461%2C2359&ssl=1',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketropak',
      imageUrl: 'https://cdn.sindonews.net/dyn/620/content/2019/03/28/185/1390809/bunda-ini-cara-membuat-ketoprak-ala-rumahan-Dfx.jpg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge', 'Bihun']
    }
  ]
  http: any;
  apiUrl: any;

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: String) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    return this.recipes = this.recipes.filter(recipe => recipe.id != recipeId)
  }
}