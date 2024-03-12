import { TestBed } from '@angular/core/testing';

import { GamesOrdersService } from './games.orders.service';

describe('GamesOrdersService', () => {
  let service: GamesOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
