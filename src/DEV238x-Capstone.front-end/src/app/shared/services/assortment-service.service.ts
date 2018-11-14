import { Injectable } from '@angular/core';
import { Assortment } from '../models/Assortment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AssortmentService {

  private assortmentApiEndpoint: string = "https://webmppcapstone.blob.core.windows.net/data/itemsdata.json";

  constructor(private http: HttpClient) { }

  getAssortment() {
    return this.http.get<Assortment[]>(this.assortmentApiEndpoint);
  }

  getItem(productName) {
    return Observable.create((observer) => {
      this.getAssortment().subscribe((assortment) => {

        for (let category of assortment) {
          for (let subCategory of category.subcategories) {
            for (let item of subCategory.items) {
              if (item.name === productName) {
                observer.next(item);
                observer.complete();
              }
            }
          }
        }
      });
    });
  }
}

