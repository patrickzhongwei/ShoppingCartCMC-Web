import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShippingService } from './shipping.service';

describe('ShippingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [ShippingService, AuthService]
    });
  });

  it('should be created', inject([ShippingService], (service: ShippingService) => {
    expect(service).toBeTruthy();
  }));
});
