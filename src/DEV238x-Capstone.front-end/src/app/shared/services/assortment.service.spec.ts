import { TestBed } from '@angular/core/testing';

import { AssortmentService } from './assortment.service';

describe('AssortmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssortmentService = TestBed.get(AssortmentService);
    expect(service).toBeTruthy();
  });
});
