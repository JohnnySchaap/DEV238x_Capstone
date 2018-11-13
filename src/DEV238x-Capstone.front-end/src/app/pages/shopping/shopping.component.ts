import { Component, OnInit } from '@angular/core';
import { AssortmentService } from 'src/app/shared/services/assortment-service.service';
import { Assortment } from 'src/app/shared/models/Assortment';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  assortment: Assortment[];
  shownProduct: number = 0;
  totalProduct: number = 0;
  selectedSubCatagory: string = "None Selected";
  sortOptions: string[];

  showInStockOnly: boolean = false;
  categoryIndex: number;
  subcategoryIndex: number;
  selectedSortOption: string;

  constructor(private assortmentService: AssortmentService) {

    assortmentService.getAssortment().subscribe((assortment) => {
      this.assortment = assortment;
    });

    this.sortOptions = ["None", "Price", "Alphabetically", "Rating"];
    this.selectedSortOption = this.sortOptions[0];
  }

  ngOnInit() {
  }

  changeInStockOnly(event) {
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

    // TODO
    this.shownProduct = 2;
    this.totalProduct = 2;
  }
}
