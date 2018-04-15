import { WeatherApiService } from './../weather-api.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentTemperature;
  response;
  tempUnitUsed;
  cities = [
    { city: 'Amsterdam', id: '6544881' },
    { city: 'Vienna', id: '2761369' },
    { city: 'Lisbon', id: '2267057' },
    { city: 'London', id: '2643741' },
    { city: 'Prague', id: '3067696' }
  ];

  constructor(private weatherService: WeatherApiService) {}

  ngOnInit() {
    const cityIds = this.cities.map(city => city.id);
    this.weatherService.setInitialConfig();
    this.getCurrentForecast(cityIds);
  }

  getCurrentForecast(cityIds) {
    this.weatherService.getCurrentForecast(cityIds).subscribe(data => {
      this.response = data.list;
    });
  }

  unitSelected(tempUnitEvent) {
    this.weatherService.setUnitsToUse(tempUnitEvent);
    this.getCurrentForecast(this.cities.map(city => city.id));
  }
}
