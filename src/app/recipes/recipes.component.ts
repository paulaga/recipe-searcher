import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Object;

  constructor( public Recipes : RecipeService) { }

  ngOnInit() {
    this.Recipes.getRecipes()
      .subscribe((data: any) => {
      this.recipes = data.results;
      })
  }

}
