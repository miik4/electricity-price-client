import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ElectricityPriceHttpService} from "../../services/electricity-price-http.service";
import {ElectricityPrice} from "../../models/electricity-price";
import {take} from "rxjs";
import {ElectricityPriceUnit} from "../../enums/electricity-price-unit";

@Component({
  selector: 'app-electricity-price-chart',
  templateUrl: './electricity-price-chart.component.html',
  styleUrls: ['./electricity-price-chart.component.scss']
})
export class ElectricityPriceChartComponent implements OnInit, OnChanges {

  @Input() selectedDate = new Date();
  @Input() selectedUnit = ElectricityPriceUnit.centsKwh;

  electricityPrices: ElectricityPrice[] = [];
  chartData: { name: string, value: number }[] = [];

  constructor(private electricityPriceHttpService: ElectricityPriceHttpService) {
  }

  ngOnInit(): void {
    this.electricityPriceHttpService.getDayAheadAndWeekPrices()
      .pipe(take(1))
      .subscribe(electricityPrices => {
        this.electricityPrices = electricityPrices;
        this.initChartData();
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedUnit?.currentValue) {
      this.initChartData();
    }
  }

  private initChartData(): void {
    const selectedDateOnly = this.selectedDate;
    selectedDateOnly.setHours(0, 0, 0, 0);
    this.chartData = this.electricityPrices
      .filter(x => {
        const from = new Date(x.inEffectFrom);
        from.setHours(0, 0, 0, 0);
        const to = new Date(x.inEffectTo);
        to.setHours(0, 0, 0, 0);
        return from >= selectedDateOnly && to <= selectedDateOnly;
      })
      .map(x => {
        return {
          name: new Date(x.inEffectFrom).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
          value: this.selectedUnit === ElectricityPriceUnit.eurMwh ? x.price : Math.round((x.price / 10) * 100) / 100
        };
      });
  }
}
