import { WeatherApiService } from './../shared/services/weather-api.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { entraceAnimation } from '../ui/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [entraceAnimation]
})
export class DashboardComponent implements OnInit {
  dasboardTitle = 'Weather Dashboard';
  entraceAnimation;
  response;
  tempUnitUsed;
  unitsSymbol;
  cities = [
    { city: 'Rotterdam', id: '2747891' },
    { city: 'Vienna', id: '2761369' },
    { city: 'Lisbon', id: '2267057' },
    { city: 'London', id: '2643741' },
    { city: 'Prague', id: '3067696' },
    { city: 'Madrid', id: '3117735' }
  ];

  constructor(private weatherService: WeatherApiService) {}

  ngOnInit() {
    const cityIds = this.cities.map(city => city.id);
    this.weatherService.setInitialConfig();
    this.tempUnitUsed = this.weatherService.getUnitsToUse();
    this.unitsSymbol = this.weatherService.getUnitSymbol();
    this.getCurrentForecast(cityIds);
  }

  getCurrentForecast(cityIds) {
    this.weatherService.getCurrentForecast(cityIds).subscribe(data => {
      this.entraceAnimation = 'active';
      this.response = data;
    });
  }

  unitSelected(tempUnitEvent) {
    this.response = null;
    this.weatherService.setUnitsToUse(tempUnitEvent);
    this.tempUnitUsed = this.weatherService.getUnitsToUse();
    this.unitsSymbol = this.weatherService.getUnitSymbol();
    this.getCurrentForecast(this.cities.map(city => city.id));
  }
}
