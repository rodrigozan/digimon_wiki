import { TestBed } from '@angular/core/testing';

import { DigimonServiceTsService } from './digimon.service.ts.service';

describe('DigimonServiceTsService', () => {
  let service: DigimonServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigimonServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
