import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterString:string): any[] {
    if(!items || !filterString){
      return items;
    }

    filterString = filterString.toLowerCase();
    return items.filter(item => item.name.toLowerCase().includes(filterString));
    
  }

}
