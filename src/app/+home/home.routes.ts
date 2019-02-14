/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 1:02 PM
 */

import { HomeComponent } from './pages/home/home.component';

export const routes = [
  {
    path     : '',
    component: HomeComponent,
    data     : {
      meta: {
        title      : 'PUBLIC.HOME.PAGE_TITLE',
        override   : true,
        description: 'PUBLIC.HOME.META_DESCRIPTION'
      }
    }
  }
];
