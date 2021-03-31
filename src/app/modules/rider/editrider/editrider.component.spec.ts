import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditriderComponent } from './editrider.component';

describe('EditriderComponent', () => {
  let component: EditriderComponent;
  let fixture: ComponentFixture<EditriderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditriderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditriderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
