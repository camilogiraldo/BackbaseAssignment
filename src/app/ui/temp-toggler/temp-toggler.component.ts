import { WeatherApiService } from './../../weather-api.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-temp-toggler',
  templateUrl: './temp-toggler.component.html',
  styleUrls: ['./temp-toggler.component.css']
})
export class TempTogglerComponent implements OnInit {
  unitsUsed;
  @Output() unitSelected = new EventEmitter<String>();
  constructor(private weatherService: WeatherApiService) {}

  ngOnInit() {
    this.unitsUsed = this.weatherService.getUnitsToUse();
  }

  tempUnitChanged(event) {
    this.unitSelected.emit(event.value);
  }
}
