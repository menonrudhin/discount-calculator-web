import { TestBed } from '@angular/core/testing';

import { ExchangeratesService } from './exchangerates.service';

describe('ExchangeratesService', () => {
  let service: ExchangeratesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeratesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
