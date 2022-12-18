import { TestBed } from '@angular/core/testing';

import { ElectricityPriceHttpService } from './electricity-price-http.service';

describe('ElectricityPriceHttpService', () => {
  let service: ElectricityPriceHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectricityPriceHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
