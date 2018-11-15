import { Item } from 'src/app/shared/models/item';

export class Product {
  item: Item;
  amount: number;

  constructor() {
    this.amount = 0;
  }
}
