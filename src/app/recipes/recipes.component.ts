import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Object;
  
  constructor( public Recipes : RecipeService) { 
  }
  
  ngOnInit() {
    let recipeArray = []
    for(let i = 1; i<=20; i++){
    this.Recipes.getRecipes(i)
      .subscribe((data: any) => {
        data.results.forEach(e => {
          recipeArray.push(e)
        })
      this.recipes = recipeArray;
      })
    }
  }

}
