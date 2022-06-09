import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ResultComponent } from './result.component';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { ThemeService } from 'src/app/shared/services/theme.service';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ ResultComponent, TranslatePipe ],
      providers: [ProductService, AuthService, ToastrService, ThemeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
