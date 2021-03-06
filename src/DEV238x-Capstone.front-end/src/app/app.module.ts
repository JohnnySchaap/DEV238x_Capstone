import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AssortmentService } from './shared/services/assortment.service';
import { PagesModule } from 'src/app/pages/pages.module';
import { CartService } from 'src/app/shared/services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    CoreModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [AssortmentService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
