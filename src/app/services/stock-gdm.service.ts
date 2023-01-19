import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { __await } from 'tslib';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class StockGDMService {
  categorys! : [];
  products! : Product[];
  constructor( private http : HttpClient ) {
  }


  getProducts() {
      let array_category : [] = [];
      return this.http.get('https://5ff06159-4d3b-4a1a-8e39-645e47dfd4fe.mock.pstmn.io/products')
          .pipe( map ( ( data : any )=> {
            this.getCategory( data.products );
            this.products = data.products;
            return data.products;

          }))

  }

  getCategory( arr : [] ) {
      let arrayCategory : any = [];
      let category : any = []
      arr.forEach( product => {
        arrayCategory.push( product['product_category'] )
      })
      category = new Set( arrayCategory );
      this.categorys =  category;

  }
  getproductByCategory( category : string ) {
      let newProducts = [];

      newProducts = this.products.filter( product => product.product_category == category );
      return newProducts;
  }


  getProductsByPLU( plu : number ) {
      console.log( this.products )
      let nuevosProductos : Product[] = [];

      nuevosProductos = this.products.filter( product => product.plu == plu)
      console.log(nuevosProductos)
      return nuevosProductos;
  }
}
