import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddriderComponent } from './addrider.component';

describe('AddriderComponent', () => {
  let component: AddriderComponent;
  let fixture: ComponentFixture<AddriderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddriderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddriderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
