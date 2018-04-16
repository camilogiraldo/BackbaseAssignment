import { entraceAnimation } from './../../ui/animations';
import { WeatherApiService } from './../../shared/services/weather-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  animations: [entraceAnimation]
})
export class DetailComponent implements OnInit, OnDestroy {
  dasboardTitle;
  entraceAnimation;
  tempUnitUsed;
  cityId;
  tempUnit;
  forecast;
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
    this.tempUnitUsed = this.weatherService.getUnitsToUse();
  }

  ngOnDestroy() {
    this.cityIdSubscription.unsubscribe();
  }

  getCityForecastDetail(cityId) {
    this.weatherService.getForecastDetail(cityId).subscribe(data => {
      this.entraceAnimation = 'active';
      this.forecast = data;
      this.dasboardTitle = `Forecast in ${
        this.forecast.city.name
      } in the next 12 hours`;
    });
  }

  unitSelected(tempUnitEvent) {
    this.forecast = null;
    this.weatherService.setUnitsToUse(tempUnitEvent);
    this.tempUnitUsed = this.weatherService.getUnitsToUse();
    this.getCityForecastDetail(this.cityId);
  }
}
