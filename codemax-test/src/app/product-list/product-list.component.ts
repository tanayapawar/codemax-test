import { Component, OnInit } from '@angular/core';
import { ProductList } from 'src/model/products';
import { ProductListService } from 'src/service/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductListService]
})
export class ProductListComponent implements OnInit {

  productList: ProductList[];
  constructor(private dataService: ProductListService ) { }

  ngOnInit(): void {
    this.productList = this.dataService.getProductList();
  }

}
