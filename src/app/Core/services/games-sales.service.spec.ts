import { TestBed } from '@angular/core/testing';

import { GamesSalesService } from './games-sales.service';

describe('GamesSalesService', () => {
  let service: GamesSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
