import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymenthistoryComponentComponent } from './paymenthistory-component.component';

describe('PaymenthistoryComponentComponent', () => {
  let component: PaymenthistoryComponentComponent;
  let fixture: ComponentFixture<PaymenthistoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymenthistoryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymenthistoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
