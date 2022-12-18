import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectricityPriceChartComponent } from './electricity-price-chart/electricity-price-chart.component';



@NgModule({
    declarations: [
        ElectricityPriceChartComponent
    ],
    exports: [
        ElectricityPriceChartComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ElectricityPriceChartModule { }
