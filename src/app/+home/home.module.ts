/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 1:04 PM
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '~/@enoct/framework/core';
import { MaterialModule } from '~/@enoct/framework/material';

import { routes } from './home.routes';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports     : [CommonModule, RouterModule.forChild(routes), SharedModule, MaterialModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
