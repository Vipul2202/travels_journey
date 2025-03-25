import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDealsComponent } from './flight-deals.component';

describe('FlightDealsComponent', () => {
  let component: FlightDealsComponent;
  let fixture: ComponentFixture<FlightDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightDealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
