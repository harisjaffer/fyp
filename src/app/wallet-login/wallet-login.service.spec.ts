import { TestBed } from '@angular/core/testing';

import { WalletLoginService } from './wallet-login.service';

describe('WalletLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalletLoginService = TestBed.get(WalletLoginService);
    expect(service).toBeTruthy();
  });
});