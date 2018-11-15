import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { AssortmentService } from 'src/app/shared/services/assortment.service';
import { Cart } from 'src/app/shared/models/cart';
import { ShippingDetails } from 'src/app/shared/models/shippingDetails';
import { Item } from 'src/app/shared/models/item';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Cart;
  shippingDetails: ShippingDetails;

  total: number;
  tax: number;
  subTotal: number;

  constructor(private assortmentService: AssortmentService, private cartService: CartService) {
    this.cart = cartService.cart;
    this.shippingDetails = new ShippingDetails();

    this.setPrices();
  }

  ngOnInit() {
  }

  setPrices() {
    this.setSubTotal();
    this.setTax();
    this.setTotal();
  }

  setTotal(): void {
    this.total = this.tax + this.subTotal;
  }

  setTax(): void {
    this.tax = this.subTotal * 0.1;
  }

  setSubTotal(): void {
    this.subTotal = 0;

    for (const product of this.cart.products) {
      if (product !== undefined && product !== null) {
        this.subTotal += product.amount * product.item.price;
      }
    }
  }

  qtyChanged(product: Product, event: any): void {
    if (product.amount > Number(product.item.stock)) {
      alert("We don't have that many items in stock. Please specify a number between 0 and " + product.item.stock);
      product.amount = Number(product.item.stock);
    }
    else if (product.amount === undefined || product.amount <= 0) {
      product.amount = 1;
    }

    this.setPrices();
    this.cartService.setCookie();
  }

  removeProduct(item: Item): void {
    this.cartService.deleteItem(item);
    this.setPrices();
  }

  checkout(): void {
    alert('Assignment stops here. Your items are sent to ' + this.shippingDetails.Name +
      ' living at ' + this.shippingDetails.Address + ', ' + this.shippingDetails.City +
      ' with phone number: ' + this.shippingDetails.Phone +
      '. Total Cost: $' + this.total.toFixed(2));
  }
}
