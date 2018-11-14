import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { Item } from 'src/app/shared/models/item';
import { Product } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart;

  constructor() {
    this.cart = new Cart();
  }

  public addItem(item: Item, amount: number) {
    if (this.cart.products[item.name] === undefined) {
      this.cart.products[item.name] = new Product();
      this.cart.products[item.name].item = item;
    }

    this.cart.products[item.name].amount += amount;
  }

  public removeItem(item: Item, amount: number) {

    if (this.cart.products[item.name] === undefined) {
      return;
    }

    this.cart.products[item.name].amount -= amount;
    if (this.cart.products[item.name].amount < 1) {
      this.cart.products[item.name].amount = 1;
    }
  }

  public deleteItem(item: Item) {
    if (this.cart.products[item.name] === undefined) {
      return;
    }

    delete this.cart.products[item.name];
  }
}
