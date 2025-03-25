import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateFlightRequestComponent } from './private-flight-request.component';

describe('PrivateFlightRequestComponent', () => {
  let component: PrivateFlightRequestComponent;
  let fixture: ComponentFixture<PrivateFlightRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateFlightRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateFlightRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
