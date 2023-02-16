import { TestBed } from '@angular/core/testing';

import { ApiFilmService } from './api-film.service';

describe('ApiFilmService', () => {
  let service: ApiFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
