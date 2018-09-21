import { TestBed, inject } from '@angular/core/testing';

import { CommunicacionErrorService } from './communicacion-error.service';

describe('CommunicacionErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunicacionErrorService]
    });
  });

  it('should be created', inject([CommunicacionErrorService], (service: CommunicacionErrorService) => {
    expect(service).toBeTruthy();
  }));
});
