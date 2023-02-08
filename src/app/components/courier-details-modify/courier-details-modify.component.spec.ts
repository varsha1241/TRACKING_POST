import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierDetailsModifyComponent } from './courier-details-modify.component';

describe('CourierDetailsModifyComponent', () => {
  let component: CourierDetailsModifyComponent;
  let fixture: ComponentFixture<CourierDetailsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierDetailsModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierDetailsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
