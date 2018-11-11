import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'src/app/pages/home/home.module';
import { BrowseProductsModule } from 'src/app/pages/browse-products/browse-products.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { BrowseProductsComponent } from 'src/app/pages/browse-products/browse-products.component';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    BrowseProductsModule
  ],
  exports: []
})
export class PagesModule { }
