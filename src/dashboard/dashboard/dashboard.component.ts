import { Component, OnInit } from '@angular/core';
import {ElectricityPriceUnit} from "../../enums/electricity-price-unit";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  units = ElectricityPriceUnit;
  selectedUnit = this.units.centsKwh;

  constructor() { }

  ngOnInit(): void {
  }

}
