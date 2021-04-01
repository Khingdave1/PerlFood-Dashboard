import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderafricanComponent } from './orderafrican.component';

describe('OrderafricanComponent', () => {
  let component: OrderafricanComponent;
  let fixture: ComponentFixture<OrderafricanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderafricanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderafricanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
