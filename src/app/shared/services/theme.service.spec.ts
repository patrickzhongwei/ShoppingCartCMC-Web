import { TestBed, inject } from '@angular/core/testing';
import { BillingService } from './billing.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ThemeService } from './theme.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslateService } from './translate.service';

describe('ThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ThemeService, BillingService, TranslatePipe, TranslateService]
    });
  });

  it('should be created', inject([ThemeService], (service: ThemeService) => {
    expect(service).toBeTruthy();
  }));
});
