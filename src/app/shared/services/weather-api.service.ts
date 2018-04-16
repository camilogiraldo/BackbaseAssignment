import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherApiService {
  APP_ID = '&APPID=05f371bfe063ab093a7f3a7396103067';
  CURRENT_WEATHER_API = 'http://api.openweathermap.org/data/2.5/group?id=';
  FORECAST_API = 'http://api.openweathermap.org/data/2.5/forecast?id=';
  TEMP_IN_FAHRENHEIT = '&units=imperial';
  TEMP_IN_CELSIUS = '&units=metric';
  FORECAST_LENGTH = '&cnt=9';

  private unitsSubject = new Subject<string>();
  unitsUsed;

  constructor(private http: HttpClient) {}

  getCurrentForecast(cityIds) {
    const unitToUse = this.getTempUnits();
    return this.http.get(
      this.CURRENT_WEATHER_API + cityIds + unitToUse + this.APP_ID
    );
  }

  getForecastDetail(cityId) {
    const unitToUse = this.getTempUnits();
    return this.http.get(
      this.FORECAST_API +
        cityId +
        this.FORECAST_LENGTH +
        unitToUse +
        this.APP_ID
    );
  }

  setInitialConfig() {
    if (!this.getUnitsToUse()) {
      localStorage.setItem('temperatureUsed', 'fahrenheit');
    }
  }

  getTempUnits() {
    const tempUnit = this.getUnitsToUse();
    let unitToUse;
    return tempUnit === 'celsius'
      ? (unitToUse = this.TEMP_IN_CELSIUS)
      : (unitToUse = this.TEMP_IN_FAHRENHEIT);
  }

  setUnitsToUse(unitsToUse) {
    localStorage.setItem('temperatureUsed', unitsToUse);
  }

  getUnitSymbol() {
    return this.getUnitsToUse() === 'fahrenheit' ? 'ºF' : 'ºC';
  }

  getUnitsToUse() {
    return localStorage.getItem('temperatureUsed');
  }
}
