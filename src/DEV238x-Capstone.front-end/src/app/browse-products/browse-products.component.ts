import { Component, OnInit } from '@angular/core';
import { AssortmentService } from '../shared/services/assortment-service.service';

@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.scss']
})
export class BrowseProductsComponent implements OnInit {

  constructor(private assortmentService: AssortmentService) {
    debugger;
    assortmentService.getAssortment().subscribe((assortment) => {
      debugger;
    });
  }

  ngOnInit() {
  }

}
