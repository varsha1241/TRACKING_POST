import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverystatementComponent } from './deliverystatement.component';

describe('DeliverystatementComponent', () => {
  let component: DeliverystatementComponent;
  let fixture: ComponentFixture<DeliverystatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverystatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverystatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
