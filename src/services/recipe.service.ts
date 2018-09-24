import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()

export class RecipeService {

  constructor(private http : HttpClient) { }

  getPages(page){
    return this.http.get(`/api/?p=${page}`)
      .pipe(map(res => res))
  }

  getRecipes(page) {
    return this.http.get(`/api/?p=${page}`)
    .pipe(map(res => {
      return res;
    }));
  }

}
