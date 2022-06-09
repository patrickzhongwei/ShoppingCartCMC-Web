import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BillingService } from './billing.service';

describe('BillingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BillingService]
    });
  });

  it('should be created', inject([BillingService], (service: BillingService) => {
    expect(service).toBeTruthy();
  }));
});
