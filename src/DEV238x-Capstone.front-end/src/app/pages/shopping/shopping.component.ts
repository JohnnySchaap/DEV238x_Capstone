import { Component, OnInit } from '@angular/core';
import { AssortmentService } from 'src/app/shared/services/assortment.service';
import { Assortment } from 'src/app/shared/models/Assortment';
import { Subcategory } from 'src/app/shared/models/subcategory';
import { Item } from 'src/app/shared/models/item';

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
  sortOptions: string[];

  shownItems: Subcategory;
  showInStockOnly = false;
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

  changeInStockOnly() {
    this.showInStockOnly = !this.showInStockOnly;
    this.updateProducts();
  }

  changeSorting(event) {
    this.updateProducts();
  }

  changeSubCategory(categoryIndex: number, subcategoryIndex: number) {
    if (this.categoryIndex !== undefined && this.subcategoryIndex !== undefined) {
      this.assortment[this.categoryIndex].subcategories[this.subcategoryIndex].selected = false;
    }

    this.categoryIndex = categoryIndex;
    this.subcategoryIndex = subcategoryIndex;
    this.assortment[this.categoryIndex].subcategories[this.subcategoryIndex].selected = true;
    this.selectedSubCatagory = this.assortment[this.categoryIndex].subcategories[this.subcategoryIndex].name;

    this.updateProducts();
  }

  updateProducts() {
    if (this.categoryIndex === undefined && this.subcategoryIndex === undefined) {
      return;
    }

    // Filter on subcategory (shallow Copy)
    this.shownItems = Object.assign([], this.assortment[this.categoryIndex].subcategories[this.subcategoryIndex]);
    this.totalProduct = this.shownItems.items.length;

    // Filter on in stock
    if (this.showInStockOnly) {
      this.shownItems.items = this.shownItems.items.filter(this.isInStock);
    }

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

  isInStock(element: Item, index, array) {
    return element.stock !== '0';
  }

  sortOnPrice(item1: Item, item2: Item) {
    if (item1.price > item2.price) {
      return 1;
    }

    if (item1.price < item2.price) {
      return -1;
    }

    return 0;
  }

  sortOnName(item1: Item, item2: Item) {
    if (item1.name > item2.name) {
      return 1;
    }

    if (item1.name < item2.name) {
      return -1;
    }

    return 0;
  }

  sortOnRate(item1: Item, item2: Item) {
    if (item1.rating > item2.rating) {
      return 1;
    }

    if (item1.rating < item2.rating) {
      return -1;
    }

    return 0;
  }
}
