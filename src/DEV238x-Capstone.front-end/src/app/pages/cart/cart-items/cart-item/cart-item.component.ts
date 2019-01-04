import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Item } from 'src/app/shared/models/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() product: Product;
  @Output() priceChanged: EventEmitter<void>;

  constructor(private cartService: CartService) {
    this.priceChanged = new EventEmitter<void>();
  }

  ngOnInit() {
  }

  // rubric55
  // Fired when the quantity has changed
  qtyChanged(product: Product, event: any): void {
    if (product.amount > Number(product.item.stock)) {
      alert('We don\'t have that many items in stock. Please specify a number between 0 and ' + product.item.stock);
      product.amount = Number(product.item.stock);
    } else if (product.amount === undefined || product.amount <= 0) {
      product.amount = 1;
    }

    // Bubble up event that the price should be changed
    this.priceChanged.emit();
  }

  // rubric54
  // Fired when a product is removed
  removeProduct(item: Item): void {
    this.cartService.deleteItem(item);

    // Bubble up event that the price should be changed
    this.priceChanged.emit();
  }
}
