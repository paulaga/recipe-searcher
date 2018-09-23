import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipe-filter'
})
export class RecipeFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
