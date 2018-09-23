import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes'
import { RecipeService } from '../services/recipe.service';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
   declarations: [
      AppComponent,
      RecipesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(routes)
   ],
   providers: [
      RecipeService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
