import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhomescreenComponent } from './adminhomescreen.component';

describe('AdminhomescreenComponent', () => {
  let component: AdminhomescreenComponent;
  let fixture: ComponentFixture<AdminhomescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminhomescreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminhomescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
