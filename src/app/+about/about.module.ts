/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 1:16 PM
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '~/@enoct/framework/core';
import { MaterialModule } from '~/@enoct/framework/material';

import { routes } from './about.routes';
import { AboutApplePearComponent } from './pages/about-apple-pear/about-apple-pear.component';
import { AboutBananaComponent } from './pages/about-banana/about-banana.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  imports     : [CommonModule, RouterModule.forChild(routes), SharedModule, MaterialModule],
  declarations: [AboutComponent, AboutUsComponent, AboutBananaComponent, AboutApplePearComponent]
})
export class AboutModule {}
