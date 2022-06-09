import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslateService } from './translate.service';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [TranslateService]
    });
  });

  it('should be created', inject([TranslateService], (service: TranslateService) => {
    expect(service).toBeTruthy();
  }));
});
