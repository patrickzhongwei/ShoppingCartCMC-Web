import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ ProductListComponent ],
      providers:[ProductService, AuthService, ToastrService, ThemeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
