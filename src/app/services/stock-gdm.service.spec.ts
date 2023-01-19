import { TestBed } from '@angular/core/testing';

import { StockGDMService } from './stock-gdm.service';

describe('StockGDMService', () => {
  let service: StockGDMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockGDMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
