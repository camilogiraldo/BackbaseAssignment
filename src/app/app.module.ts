import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { DetailComponent } from './dashboard/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherApiService } from './weather-api.service';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { TempTogglerComponent } from './ui/temp-toggler/temp-toggler.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, DetailComponent, LoadingSpinnerComponent, TempTogglerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialUiModule
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
