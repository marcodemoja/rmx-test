import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { OccupationService } from './occupation.service';
import { HttpClient } from '@angular/common/http';

describe('OccupationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        OccupationService,
        HttpClient
      ]
    });
  });

  it('should be created', inject([OccupationService], (service: OccupationService) => {
    expect(service).toBeTruthy();
  }));
});
