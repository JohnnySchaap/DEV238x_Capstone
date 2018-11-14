import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart-service.service';
import { Location } from '@angular/common';
import { Item } from '../../shared/models/item';
import { AssortmentService } from '../../shared/services/assortment-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productItem: Item;

  constructor(
    private activatedRoute: ActivatedRoute,
    private assortmentService: AssortmentService,
    private cartService: CartService,
    private location: Location) {
    this.activatedRoute.queryParams.subscribe(params => {
      const productName = params['productname'];

      this.assortmentService.getItem(productName).subscribe((item) => {
        this.productItem = item;
      });
    });
  }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }
}
