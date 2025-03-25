import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Herosection2Component } from './herosection2.component';

describe('Herosection2Component', () => {
  let component: Herosection2Component;
  let fixture: ComponentFixture<Herosection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Herosection2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Herosection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
