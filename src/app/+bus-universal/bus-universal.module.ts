/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/23/19 10:15 PM
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '~/@enoct/framework/material';
import { SharedModule } from '~/@enoct/shared';
import { CardModule } from '~/@enoct/shared/card/card.module';
import { DataTableModule } from '~/@enoct/shared/data-table';

import { routes } from './bus-universal.routes';
import { BuswayDetailContainerComponent } from './components/containers/busway-detail-container/busway-detail-container.component';
import { BuswayComponent } from './components/containers/busway/busway.component';
import { BuswayDetailComponent } from './components/forms/busway-detail/busway-detail.component';

@NgModule({
  imports     : [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
    CardModule,
    DataTableModule,
    SharedModule
  ],
  declarations: [BuswayDetailContainerComponent, BuswayDetailComponent, BuswayComponent]
})
export class BusUniversalModule {}
