import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { Location } from '@angular/common';
import { Item } from '../../shared/models/item';
import { AssortmentService } from '../../shared/services/assortment.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productItem: Item;
  amountInCart: number;
  amountToAdd: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private assortmentService: AssortmentService,
    private cartService: CartService,
    private location: Location) {

    this.amountToAdd = 1;

    // rubric 46 (2)
    // Get product info based on the url params
    this.activatedRoute.queryParams.subscribe(params => {
      const productName = params['productname'];
      this.assortmentService.getItem(productName).subscribe((item) => {
        this.productItem = item;
        this.amountInCart = this.cartService.getAmount(item);
      });
    });
  }

  ngOnInit() {
  }
  
  // rubric 45
  backClicked(): void {
    this.location.back();
  }

  // rubric 44
  addProduct(): void {
    if (this.amountToAdd <= 0) {
      alert('Please enter a positive number');
      return;
    }

    if (this.amountToAdd > (Number(this.productItem.stock) - this.amountInCart)) {
      alert('Not enough items in stock, please lower the quantity and try again');
      return;
    }

    this.cartService.addItem(this.productItem, this.amountToAdd);
    alert(this.productItem.name + ' x' + this.amountToAdd + ' added to basket.');
    this.amountToAdd = 1;
    this.amountInCart = this.cartService.getAmount(this.productItem);
  }
}
