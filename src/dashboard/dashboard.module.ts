import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ElectricityPriceChartModule} from "../electricity-price-chart/electricity-price-chart.module";
import {DashboardRoutingModule} from "./dashboard-routing.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ElectricityPriceChartModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
