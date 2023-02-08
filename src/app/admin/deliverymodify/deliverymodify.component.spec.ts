import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymodifyComponent } from './deliverymodify.component';

describe('DeliverymodifyComponent', () => {
  let component: DeliverymodifyComponent;
  let fixture: ComponentFixture<DeliverymodifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverymodifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverymodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
