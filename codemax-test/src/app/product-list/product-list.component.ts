import { Component, OnInit } from '@angular/core';
import { ProductList } from 'src/model/products';
import { ProductListService } from 'src/service/product-list.service';
import { CartServiceService } from './cart-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductListService]
})
export class ProductListComponent implements OnInit {

  productList: ProductList[];
  count: number = 0; 
  price:number;
  constructor(private dataService: ProductListService,
    private service : CartServiceService ) { }

  ngOnInit(): void {
    this.productList = this.dataService.getProductList();
    
  }

   addToCart(prod) {
   this.price = prod.price;
   this.count++;
     this.service.getItems(this.price);

  }
}
