import { TestBed, inject } from '@angular/core/testing';

import { ToastrService } from './toastr.service';

describe('ToastreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastrService]
    });
  });

  it('should be created', inject([ToastrService], (service: ToastrService) => {
    expect(service).toBeTruthy();
  }));
});
