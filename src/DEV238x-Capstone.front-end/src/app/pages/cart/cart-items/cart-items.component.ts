import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Item } from 'src/app/shared/models/item';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  @Input() products: Product[];
  @Output() priceChanged: EventEmitter<void>;

  constructor() {
    this.priceChanged = new EventEmitter<void>();
  }

  ngOnInit() {
  }

  onPriceChanged(): void {
    // Bubble up that the price has changed
    this.priceChanged.emit();
  }
}
