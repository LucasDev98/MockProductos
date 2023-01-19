import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { StockGDMService } from 'src/app/services/stock-gdm.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearcProductComponent implements OnInit {
    product! : Product[];
    productResponse! : Product[];
    existeProducto : boolean = true;
    spinner  : boolean = true;
    constructor( private activateRoute : ActivatedRoute,
                 private stockGDM : StockGDMService  ) {
    }

    ngOnInit() {
      this.activateRoute.params.subscribe( ( param : any  ) => {
        this.product = this.stockGDM.getProductsByPLU( param.termino );
        console.log(this.product)
        if ( this.product.length > 0 ){
          this.existeProducto = false;
          this.spinner = false;

        }else {
          this.existeProducto = true;
          this.spinner = false;
        }

      })
    }
}
