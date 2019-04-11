import { TestBed } from '@angular/core/testing';

import { GvaClientService } from './gva-client.service';

describe('GvaClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GvaClientService = TestBed.get(GvaClientService);
    expect(service).toBeTruthy();
  });
});
