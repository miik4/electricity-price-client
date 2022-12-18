import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElectricityPriceChartComponent} from './electricity-price-chart/electricity-price-chart.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgxChartsModule} from "@swimlane/ngx-charts";


@NgModule({
  declarations: [
    ElectricityPriceChartComponent
  ],
  exports: [
    ElectricityPriceChartComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgxChartsModule
  ]
})
export class ElectricityPriceChartModule {
}
