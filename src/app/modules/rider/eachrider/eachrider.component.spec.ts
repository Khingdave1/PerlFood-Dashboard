import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachriderComponent } from './eachrider.component';

describe('EachriderComponent', () => {
  let component: EachriderComponent;
  let fixture: ComponentFixture<EachriderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachriderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachriderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
