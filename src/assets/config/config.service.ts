import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Config} from "./config";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: Config;
  private configUrl = './assets/config/config.json';

  constructor(private http: HttpClient) {
  }

  load(): void {
    this.http.get<Config>(this.configUrl)
      .subscribe(data => {
        this.config = data;
      });
  }

  getBaseUrl(): string {
    return this.config.baseUrl;
  }
}
