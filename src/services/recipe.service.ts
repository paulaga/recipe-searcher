import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()

export class RecipeService {
  private urlPuppy = "/api/?q="

  constructor(private http : HttpClient) { }
  getRecipes() {
    console.log("Recetas listas!")
    return this.http.get(this.urlPuppy)
      .pipe(map(res => res));
  }

}
