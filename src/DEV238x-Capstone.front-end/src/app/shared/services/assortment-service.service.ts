import { Injectable } from '@angular/core';
import { Assortment } from '../models/Assortment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AssortmentService {

  private assortmentApiEndpoint: string = "https://webmppcapstone.blob.core.windows.net/data/itemsdata.json";

  constructor(private http: HttpClient) { }

  getAssortment() {
    return this.http.get<Assortment[]>(this.assortmentApiEndpoint);
  }

}
