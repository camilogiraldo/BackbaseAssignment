import { WeatherApiService } from './../../weather-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  cityId;
  cityName: '';
  tempUnit;
  forecast;
  cityLoaded = false;
  cityIdSubscription: Subscription;

  constructor(
    private weatherService: WeatherApiService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cityIdSubscription = this.router.params.subscribe(
      params => (this.cityId = +params['id'])
    );
    this.getCityForecastDetail(this.cityId);
  }

  ngOnDestroy() {
    this.cityIdSubscription.unsubscribe();
  }

  getCityForecastDetail(cityId) {
    this.weatherService.getForecastDetail(cityId).subscribe(data => {
      this.cityLoaded = true;
      this.cityName = data.city.name;
      this.forecast = data.list;
    });
  }

  unitSelected(tempUnitEvent) {
    this.weatherService.setUnitsToUse(tempUnitEvent);
    this.getCityForecastDetail(this.cityId);
  }
}
