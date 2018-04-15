import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialUiModule } from './material-ui/material-ui.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, MaterialUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
