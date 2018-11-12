import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseProductsComponent } from './browse-products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [BrowseProductsComponent],
  exports: [BrowseProductsComponent]
})
export class BrowseProductsModule { }
