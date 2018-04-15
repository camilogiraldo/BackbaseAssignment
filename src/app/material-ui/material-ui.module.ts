import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatButtonToggleModule, MatIconModule],
  exports: [MatButtonToggleModule, MatIconModule]
})
export class MaterialUiModule {}
