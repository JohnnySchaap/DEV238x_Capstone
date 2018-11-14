import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Item } from '../models/item';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });
  
  it('should add item', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();

    let item = new Item();
    item.name = "testName";
    let addedAmount = 5;

    service.addItem(item, addedAmount);

    expect(service.cart.products[item.name]).not.toBeUndefined();
    expect(service.cart.products[item.name].amount).toBe(addedAmount);
  })
});
