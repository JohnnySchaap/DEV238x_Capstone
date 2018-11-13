import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Item;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
  }

  navigateToProduct() {
    this.router.navigateByUrl("/product?productname=" + this.product.name);
  }

  addProduct() {
    this.cartService.addItem(this.product, 1);
  }
}
