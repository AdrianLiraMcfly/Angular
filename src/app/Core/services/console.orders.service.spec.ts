import { TestBed } from '@angular/core/testing';

import { ConsoleOrdersService } from './console.orders.service';

describe('ConsoleOrdersService', () => {
  let service: ConsoleOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoleOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
