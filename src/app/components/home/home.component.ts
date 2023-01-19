import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { StockGDMService } from 'src/app/services/stock-gdm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    category! : [] ;
    products! : Product[];
    page      : number = 0;
    spinner   : boolean = true;
    // totalPages = this.products.length;
    constructor( public stockGDM : StockGDMService ) {

      this.getProductos();
    }

    getProductos() {
      this.stockGDM.getProducts()
      .subscribe( data => {
        this.products = data;
        this.spinner = false;
      })

    }

    getProductByCategory( category : string ) {

      if ( category == '') {
          this.getProductos();
          return
      }

      this.products = this.stockGDM.getproductByCategory( category );
      if ( this.page > this.products.length ) {
        this.next();
      }

    }


    prev() {
      this.page -= 15;
    }

    next() {

      if ( this.page > this.products.length ) {
        this.stockGDM.getProducts();
          this.page = 0;
      }else{
        this.page += 15;
      }
    }

}
