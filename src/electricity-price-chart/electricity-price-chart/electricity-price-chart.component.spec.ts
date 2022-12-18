import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityPriceChartComponent } from './electricity-price-chart.component';

describe('ElectricityPriceChartComponent', () => {
  let component: ElectricityPriceChartComponent;
  let fixture: ComponentFixture<ElectricityPriceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityPriceChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricityPriceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
