import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../assets/config/config.service";
import {Observable, take} from "rxjs";
import {ElectricityPrice} from "../models/electricity-price";

@Injectable({
  providedIn: 'root'
})
export class ElectricityPriceHttpService {

  private readonly baseUrl: string;

  constructor(private configService: ConfigService,
              private http: HttpClient) {
    this.baseUrl = configService.getBaseUrl();
  }

  getDayAheadAndWeekPrices(): Observable<ElectricityPrice[]> {
    return this.http.get<ElectricityPrice[]>(`${this.baseUrl}/electricity-price`);
  }
}
