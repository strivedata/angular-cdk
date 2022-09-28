import { TestBed } from '@angular/core/testing';

import { AngularCdkService } from './angular-cdk.service';

describe('AngularCdkService', () => {
  let service: AngularCdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularCdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
