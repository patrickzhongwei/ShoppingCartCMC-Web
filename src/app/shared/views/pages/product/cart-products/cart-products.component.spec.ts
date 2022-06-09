import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CartProductsComponent } from './cart-products.component';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { ThemeService } from 'src/app/shared/services/theme.service';

describe('CartProductsComponent', () => {
  let component: CartProductsComponent;
  let fixture: ComponentFixture<CartProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers:[ProductService, AuthService, ToastrService, ThemeService],
      declarations: [ CartProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
