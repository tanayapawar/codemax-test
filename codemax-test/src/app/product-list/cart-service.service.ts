import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  $cartItems = new EventEmitter();
  cart={
    count: 0,
    price: 0
  }

  constructor() { }

  getItems(productPrice){
    this.cart.count++
    this.cart.price = this.cart.price + productPrice;
    this.$cartItems.emit(this.cart);
  }
  
}
