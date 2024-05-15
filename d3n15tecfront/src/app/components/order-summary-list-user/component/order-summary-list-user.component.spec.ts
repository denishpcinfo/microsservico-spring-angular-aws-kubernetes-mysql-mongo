import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryListUserComponent } from './order-summary-list-user.component';

describe('OrderSummaryListUserComponent', () => {
  let component: OrderSummaryListUserComponent;
  let fixture: ComponentFixture<OrderSummaryListUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderSummaryListUserComponent]
    });
    fixture = TestBed.createComponent(OrderSummaryListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
