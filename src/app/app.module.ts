import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { DetailComponent } from './dashboard/detail/detail.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, DetailComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
