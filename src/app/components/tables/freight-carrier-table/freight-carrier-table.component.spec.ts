import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightCarrierTableComponent } from './freight-carrier-table.component';

describe('FreightCarrierTableComponent', () => {
  let component: FreightCarrierTableComponent;
  let fixture: ComponentFixture<FreightCarrierTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreightCarrierTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreightCarrierTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
