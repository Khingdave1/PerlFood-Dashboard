import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpasteryComponent } from './orderpastery.component';

describe('OrderpasteryComponent', () => {
  let component: OrderpasteryComponent;
  let fixture: ComponentFixture<OrderpasteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderpasteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpasteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
