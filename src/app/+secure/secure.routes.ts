/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 3/4/19 10:02 AM
 */

import { AuthGuard } from '~/@enoct/framework/auth';

import { SecureComponent } from './pages/secure/secure.component';

export const routes = [
  {
    path       : '',
    component  : SecureComponent,
    canActivate: [AuthGuard],
    data       : {
      meta: {
        title      : 'PUBLIC.SECURE.PAGE_TITLE',
        description: 'PUBLIC.SECURE.META_DESCRIPTION'
      }
    }
  }
];
