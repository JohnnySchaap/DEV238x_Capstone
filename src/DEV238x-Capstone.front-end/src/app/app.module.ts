import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { BrowseProductsModule } from './browse-products/browse-products.module';
import { HttpClientModule } from '@angular/common/http';
import { AssortmentService } from './shared/services/assortment-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    BrowseProductsModule,
    AppRoutingModule
  ],
  providers: [AssortmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
