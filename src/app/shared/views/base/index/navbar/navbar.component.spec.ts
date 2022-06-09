import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { NavbarComponent } from './navbar.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';
import { TranslateService } from 'src/app/shared/services/translate.service';
import { ThemeService } from 'src/app/shared/services/theme.service';

xdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ NavbarComponent ],
      providers: [ProductService, AuthService, ToastrService, ThemeService, TranslatePipe, TranslateService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
