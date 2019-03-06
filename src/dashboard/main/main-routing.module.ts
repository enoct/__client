/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 3/6/19 11:28 AM
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path       : '',
    component  : MainPageComponent,
    data       : {
      meta: {
        title      : 'PUBLIC.SECURE.PAGE_TITLE',
        description: 'PUBLIC.SECURE.META_DESCRIPTION'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
