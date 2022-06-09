import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from './product.service';
import { ThemeService } from './theme.service';
import { BillingService } from './billing.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslateService } from './translate.service';


describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule
      ],
      providers: [ProductService, AuthService, ThemeService, BillingService, TranslatePipe, TranslateService ]
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
