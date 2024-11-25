import { Plat } from '../model/plat.model';
import { PlatService } from './plat.service';
import { TestBed } from '@angular/core/testing';


describe('ProduitService', () => {
  let service: PlatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
