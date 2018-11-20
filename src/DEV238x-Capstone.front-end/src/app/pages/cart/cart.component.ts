import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { AssortmentService } from 'src/app/shared/services/assortment.service';
import { Cart } from 'src/app/shared/models/cart';
import { ShippingDetails } from 'src/app/shared/models/shipping-details';
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

  setPrices(): void {
    this.setSubTotal();
    this.setTax();
    this.setTotal();
    this.cartService.setCookie();
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

  checkout(): void {
    alert('Assignment stops here. Your items are sent to ' + this.shippingDetails.name +
      ' living at ' + this.shippingDetails.address + ', ' + this.shippingDetails.city +
      ' with phone number: ' + this.shippingDetails.phone +
      '. Total Cost: $' + this.total.toFixed(2) );
  }
}
