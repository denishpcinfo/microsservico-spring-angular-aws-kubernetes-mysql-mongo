import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryListComponent } from './order-summary-list.component';

describe('OrderSummaryListComponent', () => {
  let component: OrderSummaryListComponent;
  let fixture: ComponentFixture<OrderSummaryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderSummaryListComponent]
    });
    fixture = TestBed.createComponent(OrderSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
