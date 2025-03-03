import { TestBed } from '@angular/core/testing';
import { SelfItemsService } from './self-items.service';


describe('SelfItemsService', () => {
  let service: SelfItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
