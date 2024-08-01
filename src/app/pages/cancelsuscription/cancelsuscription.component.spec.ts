import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelsuscriptionComponent } from './cancelsuscription.component';

describe('CancelsuscriptionComponent', () => {
  let component: CancelsuscriptionComponent;
  let fixture: ComponentFixture<CancelsuscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelsuscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelsuscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
