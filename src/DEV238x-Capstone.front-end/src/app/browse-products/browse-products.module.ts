import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseProductsComponent } from './browse-products.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BrowseProductsComponent],
  exports: [BrowseProductsComponent]
})
export class BrowseProductsModule { }
