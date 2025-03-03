import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfItemsComponent } from './self-items.component';

describe('SelfItemsComponent', () => {
  let component: SelfItemsComponent;
  let fixture: ComponentFixture<SelfItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
