import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdrinkComponent } from './orderdrink.component';

describe('OrderdrinkComponent', () => {
  let component: OrderdrinkComponent;
  let fixture: ComponentFixture<OrderdrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderdrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
