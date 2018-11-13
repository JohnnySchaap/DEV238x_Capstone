import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productName: string;

  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.productName = params['productname'];
    });
  }

  ngOnInit() {
  }

}
