import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercontinentalComponent } from './ordercontinental.component';

describe('OrdercontinentalComponent', () => {
  let component: OrdercontinentalComponent;
  let fixture: ComponentFixture<OrdercontinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdercontinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercontinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
