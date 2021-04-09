import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpastryComponent } from './orderpastry.component';

describe('OrderpastryComponent', () => {
  let component: OrderpastryComponent;
  let fixture: ComponentFixture<OrderpastryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderpastryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpastryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
