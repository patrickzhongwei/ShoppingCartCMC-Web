import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShippingService } from './shipping.service';
import { HttpClient } from '@angular/common/http';
import { shoppingUrl } from 'src/environments/environment';

describe('ShippingService', () => {

  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let service: ShippingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [ShippingService, AuthService]
    });
  });

  beforeEach(() => {
    service = TestBed.get(ShippingService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });


  it('should be created', inject([ShippingService], (service: ShippingService) => {
    expect(service).toBeTruthy();
  }));



  it('should be return flat shipping fee 10 - AUD', (done) => {

    let fee: number = 10;
    const dummyFee: number = 10;

    service.getShippingFee(45).subscribe(fee => {
        expect(fee).toBe(fee);
        done();
    });

    const request = httpMock.expectOne(`${shoppingUrl.root}/api/shipping?ccyCode=AUD&cartSumPrice=45`);
    expect(request.request.method).toBe("GET");
    request.flush(dummyFee)

  });


  it('should be return high shipping fee 20 - AUD', (done) => {

    let fee: number = 20;
    const dummyFee: number = 20;

    service.getShippingFee(45).subscribe(fee => {
        expect(fee).toBe(fee);
        done();
    });

    const request = httpMock.expectOne(`${shoppingUrl.root}/api/shipping?ccyCode=AUD&cartSumPrice=45`);
    expect(request.request.method).toBe("GET");
    request.flush(dummyFee)
  });








});
