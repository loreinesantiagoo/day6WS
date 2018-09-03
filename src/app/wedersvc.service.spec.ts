import { TestBed, inject } from '@angular/core/testing';

import { WedersvcService } from './wedersvc.service';

describe('WedersvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WedersvcService]
    });
  });

  it('should be created', inject([WedersvcService], (service: WedersvcService) => {
    expect(service).toBeTruthy();
  }));
});
