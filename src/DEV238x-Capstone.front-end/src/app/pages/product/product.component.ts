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
  amountInBasket: number;
  amountToAdd: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private assortmentService: AssortmentService,
    private cartService: CartService,
    private location: Location) {

    this.amountToAdd = 1;

    this.activatedRoute.queryParams.subscribe(params => {
      const productName = params['productname'];

      this.assortmentService.getItem(productName).subscribe((item) => {
        this.productItem = item;
        this.amountInBasket = this.cartService.getAmount(item);
      });
    });
  }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }

  addProduct() {
    if (this.amountToAdd > (Number(this.productItem.stock) - this.amountInBasket)) {
      alert("Not enough items in stock, please lower the quantity and try again");
      return;
    }

    this.cartService.addItem(this.productItem, this.amountToAdd);
    alert(this.productItem.name + " x" + this.amountToAdd + " added to basket.");
    this.amountToAdd = 0;
    this.amountInBasket = this.cartService.getAmount(this.productItem);
  }
}
