import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintabComponent } from './admintab.component';

describe('AdmintabComponent', () => {
  let component: AdmintabComponent;
  let fixture: ComponentFixture<AdmintabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
