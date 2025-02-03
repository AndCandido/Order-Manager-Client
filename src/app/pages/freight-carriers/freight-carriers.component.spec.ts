import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightCarriersComponent } from './freight-carriers.component';

describe('FreightCarriersComponent', () => {
  let component: FreightCarriersComponent;
  let fixture: ComponentFixture<FreightCarriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreightCarriersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreightCarriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
