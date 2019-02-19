/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/18/19 2:00 PM
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
import { BuswayDetailContainerComponent } from './busway/busway-detail/busway-detail-container.component';
import { BuswayDetailComponent } from './busway/busway-detail/busway-detail.component';
import { BuswayComponent } from './busway/busway.component';

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
