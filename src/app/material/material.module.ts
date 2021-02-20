import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

const MATERIAL = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSliderModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
];

@NgModule({
  imports: [
    MATERIAL
  ],
  exports: [MATERIAL]
})
export class MaterialModule { }
