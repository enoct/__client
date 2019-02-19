/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 10:01 PM
 */

import { MetaGuard } from '@ngx-meta/core';
import { ChangeLanguageComponent } from '~/@enoct/framework/i18n';

import { MainComponent } from './layout/basic/pages/main/main.component';
import { LoginComponent } from './login/pages/login/login.component';

export const routes = [
  {
    path       : 'login',
    component  : LoginComponent,
    canActivate: [MetaGuard],
    data       : {
      meta: {
        title: 'PUBLIC.LOGIN.PAGE_TITLE'
      }
    }
  },
  {
    path            : '',
    component       : MainComponent,
    children        : [
      {
        path        : '',
        loadChildren: './+home/home.module#HomeModule'
      },
      {
        path        : 'about',
        loadChildren: './+about/about.module#AboutModule'
      },
      {
        path        : 'bus-universal',
        loadChildren: './+bus-universal/bus-universal.module#BusUniversalModule'
      },
      {
        path        : 'secure-page',
        loadChildren: './+secure/secure.module#SecureModule'
      }
    ],
    canActivateChild: [MetaGuard],
    data            : {
      i18n: {
        isRoot: true
      }
    }
  },
  {
    path     : 'change-language/:languageCode',
    component: ChangeLanguageComponent
  },
  {
    path      : '**',
    redirectTo: '',
    pathMatch : 'full'
  }
];
