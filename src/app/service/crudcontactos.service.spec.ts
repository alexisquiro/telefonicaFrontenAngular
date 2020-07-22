import { TestBed } from '@angular/core/testing';

import { CrudcontactosService } from './crudcontactos.service';

describe('CrudcontactosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudcontactosService = TestBed.get(CrudcontactosService);
    expect(service).toBeTruthy();
  });
});
