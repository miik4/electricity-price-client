import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-electricity-price-chart',
  templateUrl: './electricity-price-chart.component.html',
  styleUrls: ['./electricity-price-chart.component.scss']
})
export class ElectricityPriceChartComponent implements OnInit {

  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
