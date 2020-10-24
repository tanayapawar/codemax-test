import { Injectable } from '@angular/core';
import { ProductList } from 'src/model/products';
import { PRODUCTS } from './product-list';
import { ProductList } from './../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }
  getProductList(): ProductList[] {
    return PRODUCTS;
  }
}
