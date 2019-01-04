import { Component, OnInit } from '@angular/core';
import { AssortmentService } from 'src/app/shared/services/assortment.service';
import { Assortment } from 'src/app/shared/models/assortment';
import { Subcategory } from 'src/app/shared/models/subcategory';
import { Item } from 'src/app/shared/models/item';
import { element } from 'protractor';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  assortment: Assortment[];
  shownProduct = 0;
  totalProduct = 0;
  selectedSubCatagory = 'None Selected';

  shownItems: Subcategory;
  sortOptions: string[];
  showInStockOnly = false;
  minPrice = 0;
  maxPrice = 9999;

  categoryIndex: number;
  subcategoryIndex: number;
  selectedSortOption: string;

  constructor(private assortmentService: AssortmentService) {

    assortmentService.getAssortment().subscribe((assortment) => {
      this.assortment = assortment;
    });

    this.sortOptions = ['None', 'Price', 'Alphabetically', 'Rating'];
    this.selectedSortOption = this.sortOptions[0];
  }

  ngOnInit() {
  }

  // Determines which products are shown
  updateProducts(): void {
    if (this.categoryIndex === undefined && this.subcategoryIndex === undefined) {
      return;
    }

    // Filter on subcategory (shallow Copy)
    this.shownItems = Object.assign([], this.assortment[this.categoryIndex].subcategories[this.subcategoryIndex]);
    this.totalProduct = this.shownItems.items.length;

    // Filter on in stock
    // rubric29
    if (this.showInStockOnly) {
      this.shownItems.items = this.shownItems.items.filter(this.isInStock);
    }

    // Filter on price
    this.shownItems.items = this.shownItems.items.filter(this.isBetweenPriceRangeWithParams(this.minPrice, this.maxPrice));

    // rubric33
    // Sort on sorting choice
    switch (this.selectedSortOption) {
      case 'None':
        break;
      case 'Price':
        this.shownItems.items = this.shownItems.items.sort(this.sortOnPrice);
        break;
      case 'Alphabetically':
        this.shownItems.items = this.shownItems.items.sort(this.sortOnName);
        break;
      case 'Rating':
        this.shownItems.items = this.shownItems.items.sort(this.sortOnRate);
        break;
      default:
        break;
    }

    // Update shown Products
    this.shownProduct = this.shownItems.items.length;
  }

  // == Change functions ==

  changeInStockOnly(): void {
    this.showInStockOnly = !this.showInStockOnly;
    this.updateProducts();
  }

  changeSorting(event): void {
    this.updateProducts();
  }

  changePriceRange(event): void {
    this.updateProducts();
  }

  // rubric26
  // rubric28
  changeSubCategory(categoryIndex: number, subcategoryIndex: number): void {
    if (this.categoryIndex !== undefined && this.subcategoryIndex !== undefined) {
      this.assortment[this.categoryIndex].subcategories[this.subcategoryIndex].selected = false;
    }

    this.categoryIndex = categoryIndex;
    this.subcategoryIndex = subcategoryIndex;
    this.assortment[this.categoryIndex].subcategories[this.subcategoryIndex].selected = true;
    // rubric27
    this.selectedSubCatagory = this.assortment[this.categoryIndex].subcategories[this.subcategoryIndex].name;

    this.updateProducts();
  }

  // == Filter functions ==

  isBetweenPriceRangeWithParams(minPrice, maxPrice) {
    return function isBetweenPriceRange(filterElement: Item, index, array) {
      return filterElement.price <= maxPrice && filterElement.price >= minPrice;
    };
  }

  isInStock(filterElement: Item, index, array): boolean {
    return filterElement.stock !== '0';
  }

  sortOnPrice(item1: Item, item2: Item): number {
    if (item1.price > item2.price) {
      return 1;
    }

    if (item1.price < item2.price) {
      return -1;
    }

    return 0;
  }

  sortOnName(item1: Item, item2: Item): number {
    if (item1.name > item2.name) {
      return 1;
    }

    if (item1.name < item2.name) {
      return -1;
    }

    return 0;
  }

  sortOnRate(item1: Item, item2: Item): number {
    if (item1.rating > item2.rating) {
      return 1;
    }

    if (item1.rating < item2.rating) {
      return -1;
    }

    return 0;
  }
}
