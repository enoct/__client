/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 3:28 AM
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BuswayEffects } from './busway/busway.effects';
import * as fromBusway from './busway/busway.reducer';
import { BUSWAY } from './busway/busway.state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(BUSWAY, fromBusway.reducer),
    EffectsModule.forFeature([BuswayEffects])
  ]
})
export class BusUniversalModule {}
