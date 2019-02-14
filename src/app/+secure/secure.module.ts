/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 12:30 PM
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '~/@enoct/framework/core';
import { MaterialModule } from '~/@enoct/framework/material';

import { SecureComponent } from './pages/secure/secure.component';
import { routes } from './secure.routes';

@NgModule({
  imports     : [CommonModule, RouterModule.forChild(routes), SharedModule, MaterialModule],
  declarations: [SecureComponent]
})
export class SecureModule {}
