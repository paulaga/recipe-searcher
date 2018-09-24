import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()

export class RecipeService {
  private urlPuppy = "/api/?q="

  constructor(private http : HttpClient) { }
  // getPages() {
  //   let result = [];
  //   let page = 1;
  //   this.http.get(`/api/?p=${page}`)
  //     .pipe(map(res => {
  //       result.push(res[`results`])
  //       if(page < 20){
  //         return page++
  //       }
  //     }))
  //   return result;
  // }
  getRecipes() {
    console.log("Recetas listas!")
    return this.http.get(this.urlPuppy)
      .pipe(map(res => {
        console.log(res)
        return res}));
  }

}
