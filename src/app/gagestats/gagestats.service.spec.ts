import { TestBed } from '@angular/core/testing';

import { GagestatsService } from './gagestats.service';

describe('GagestatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GagestatsService = TestBed.get(GagestatsService);
    expect(service).toBeTruthy();
  });
});
