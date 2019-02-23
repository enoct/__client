/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 11:26 PM
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BuswayEffects } from './effects/busway.effects';
import * as fromBusway from './reducers/busway.reducer';
import { BUSWAY } from './state/busway.state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(BUSWAY, fromBusway.reducer),
    EffectsModule.forFeature([BuswayEffects])
  ]
})
export class BusUniversalModule {}
