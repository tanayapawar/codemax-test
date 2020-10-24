import { Injectable } from '@angular/core';
import { ProductList } from 'src/model/products';
import { PRODUCTS } from './product-list';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }
  getProductList(): ProductList[] {
    return PRODUCTS;
  }
}
