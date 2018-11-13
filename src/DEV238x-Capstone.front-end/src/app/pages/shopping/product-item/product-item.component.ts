import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Item;

  constructor() { }

  ngOnInit() {
  }

}
