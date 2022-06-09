import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ ProductsComponent ],
      providers: [ProductService, AuthService, ToastrService, ThemeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
