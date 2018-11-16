import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Item;
  qtyToAdd = 1;
  inBasket = 0;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.inBasket = this.cartService.getAmount(this.product);
  }

  navigateToProduct() {
    this.router.navigateByUrl('/product?productname=' + this.product.name);
  }

  addProduct() {

    if (this.qtyToAdd <= 0) {
      alert('Please enter a positive value.');
      return;
    }

    if (Number(this.product.stock) < this.inBasket + this.qtyToAdd) {
      alert('Not enough items in stock (in stock: ' + this.product.stock + '). ' +
        'You have ' + this.inBasket + ' of ' + this.product.name + ' in the basket.');
      return;
    }

    this.cartService.addItem(this.product, this.qtyToAdd);
    this.inBasket = this.cartService.getAmount(this.product);
    alert('Item added. You have ' + this.inBasket + ' of ' + this.product.name + ' in the basket.');
  }
}
