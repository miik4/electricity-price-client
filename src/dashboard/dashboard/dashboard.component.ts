import {Component, OnInit} from '@angular/core';
import {ElectricityPriceUnit} from "../../enums/electricity-price-unit";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  units = ElectricityPriceUnit;
  selectedUnit = this.units.centsKwh;
  selectedDate: Date;
  minDate: Date;
  maxDate: Date;

  constructor() {
    this.selectedDate = new Date();
    this.selectedDate.setHours(0, 0, 0, 0)
    this.minDate = this.addDays(this.selectedDate, -6);
    this.maxDate = this.addDays(this.selectedDate, 1);
  }

  ngOnInit(): void {
  }

  private addDays(date, days): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  previousDate(): void {
    this.selectedDate = this.addDays(this.selectedDate, -1);
  }

  nextDate(): void {
    this.selectedDate = this.addDays(this.selectedDate, 1);
  }
}
