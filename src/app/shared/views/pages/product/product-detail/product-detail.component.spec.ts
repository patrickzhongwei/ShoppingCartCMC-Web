import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from 'src/app/shared/services/product.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { ThemeService } from 'src/app/shared/services/theme.service';

xdescribe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ ProductDetailComponent ],
      providers: [ProductService, AuthService, ToastrService, ThemeService,
        {provide: ActivatedRoute, useValue: fakeActivatedRoute}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
