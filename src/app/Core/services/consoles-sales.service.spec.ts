import { TestBed } from '@angular/core/testing';

import { ConsolesSalesService } from './consoles-sales.service';

describe('ConsolesSalesService', () => {
  let service: ConsolesSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsolesSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
