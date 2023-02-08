import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverystatementLoginComponent } from './deliverystatement-login.component';

describe('DeliverystatementLoginComponent', () => {
  let component: DeliverystatementLoginComponent;
  let fixture: ComponentFixture<DeliverystatementLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverystatementLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverystatementLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
