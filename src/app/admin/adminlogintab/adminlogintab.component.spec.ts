import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlogintabComponent } from './adminlogintab.component';

describe('AdminlogintabComponent', () => {
  let component: AdminlogintabComponent;
  let fixture: ComponentFixture<AdminlogintabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlogintabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlogintabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
