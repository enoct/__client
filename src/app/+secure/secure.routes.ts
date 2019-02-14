/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 12:30 PM
 */

import { AuthGuard } from '@ngx-auth/core';

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
