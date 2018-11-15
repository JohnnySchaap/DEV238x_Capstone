import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { Item } from 'src/app/shared/models/item';
import { Product } from 'src/app/shared/models/product';
import { CookieService } from 'src/app/shared/services/cookie.service';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart;

  constructor(private cookieService: CookieService) {
    const cartString = this.cookieService.getCookie('cart');

    if (cartString == null) {
      this.cart = new Cart();
    } else {
      this.cart = JSON.parse(cartString);
    }
  }

  public setCookie() {
    this.cookieService.setCookie('cart', JSON.stringify(this.cart));
  }

  private getProduct(item: Item) {
    for (const product of this.cart.products) {
      if (product !== undefined && product !== null && product.item.name === item.name) {
        return product;
      }
    }

    const newProduct = new Product();
    newProduct.item = item;
    this.cart.products.push(newProduct);
    return newProduct;
  }

  public addItem(item: Item, amount: number) {

    const product = this.getProduct(item);
    product.amount += amount;
    this.setCookie();
  }

  public removeItem(item: Item, amount: number) {

    const product = this.getProduct(item);
    product.amount -= amount;
    this.setCookie();
  }

  public deleteItem(item: Item) {

    for (const index in this.cart.products) {
      if (this.cart.products[index] !== undefined &&
        this.cart.products[index] !== null &&
        this.cart.products[index].item.name === item.name) {
        delete this.cart.products[index];
        break;
      }
    }

    this.setCookie();
  }

  public getAmount(item: Item): number {

    const product = this.getProduct(item);
    if (product.amount === 0) {
      this.deleteItem(item);
      return 0;
    }

    return product.amount;
  }
}
