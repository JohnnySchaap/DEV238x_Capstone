import { Product } from 'src/app/shared/models/product';

export class Cart {
  products: Product[];

  constructor() {
    this.products = [];
  }
}
