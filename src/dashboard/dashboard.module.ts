import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ElectricityPriceChartModule} from "../electricity-price-chart/electricity-price-chart.module";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ElectricityPriceChartModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class DashboardModule {
}
