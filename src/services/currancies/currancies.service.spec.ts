import { TestBed } from '@angular/core/testing';

import { CurranciesService } from './currancies.service';

describe('CurranciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurranciesService = TestBed.get(CurranciesService);
    expect(service).toBeTruthy();
  });
});
