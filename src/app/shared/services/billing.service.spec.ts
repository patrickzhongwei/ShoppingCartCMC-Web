import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BillingService } from './billing.service';
import { HttpClient } from '@angular/common/http';
import { mockBillingDto } from '../mock_data/mock-billing-dto';
import { mockBilling } from '../mock_data/mock-billing';
import { shoppingUrl } from 'src/environments/environment';

describe('BillingService', () => {

  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let service: BillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BillingService]
    });
  });

  beforeEach(() => {
    service = TestBed.get(BillingService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });


  it('should be created', inject([BillingService], (service: BillingService) => {
    expect(service).toBeTruthy();
  }));

  const dummyOrderNum: number = 12345;

  it('should place ordre', (done) => {

    service.placeOrder(mockBilling).subscribe(fee => {
        expect(fee).toBe(dummyOrderNum);
        done();
    });

    const request = httpMock.expectOne(`${shoppingUrl.root}/api/billing`);
    expect(request.request.method).toBe("PUT");
    request.flush(dummyOrderNum)

  });

});
