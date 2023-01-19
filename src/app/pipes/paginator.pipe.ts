import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'paginator'
})
export class PaginatorPipe implements PipeTransform {

  transform( products : Product[], page : number = 0  ) : Product [] {
      return products.slice( page, page + 15 );
  }

}
