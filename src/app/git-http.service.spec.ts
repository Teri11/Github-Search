import { TestBed } from '@angular/core/testing';

import { GitHttpService } from './git-http.service';

describe('GitHttpService', () => {
  let service: GitHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
