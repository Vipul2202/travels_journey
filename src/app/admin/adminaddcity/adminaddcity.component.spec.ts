import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddcityComponent } from './adminaddcity.component';

describe('AdminaddcityComponent', () => {
  let component: AdminaddcityComponent;
  let fixture: ComponentFixture<AdminaddcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminaddcityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaddcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
