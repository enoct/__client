/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 3/8/19 2:40 AM
 */

import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule, makeStateKey } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { ConfigLoader, ConfigService } from '@ngx-config/core';
import { MetaLoader } from '@ngx-meta/core';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { ANGULARTICS2_TOKEN } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';
import { AnalyticsModule } from '~/@enoct/framework/analytics';
import { AuthLoader, AuthModule, RefreshTokenInterceptor, TokenInterceptor } from '~/@enoct/framework/auth';
import { configFactory, CoreModule, metaFactory, SharedModule } from '~/@enoct/framework/core';
import { HttpInterceptorModule } from '~/@enoct/framework/http';
import { ChangeLanguageComponent, I18NModule, translateFactory } from '~/@enoct/framework/i18n';
import { MaterialModule } from '~/@enoct/framework/material';
import { StoreModule } from '~/app/store';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HeaderComponent } from './layout/basic/pages/header/header.component';
import { MainComponent } from './layout/basic/pages/main/main.component';
import { LoginComponent } from './login/components/pages/login/login.component';
import { authFactory } from './login/services/auth.factory'

export const REQ_KEY = makeStateKey<string>('req');

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {suppressScrollX: true};

@NgModule({
  imports        : [
    BrowserModule.withServerTransition({appId: 'my-app-id'}),
    TransferHttpCacheModule,
    RouterModule.forRoot(routes),
    AuthModule.forRoot({
      provide   : AuthLoader,
      useFactory: (authFactory)
    }),
    PerfectScrollbarModule,
    AnalyticsModule.forRoot([
      {
        provide : ANGULARTICS2_TOKEN,
        useValue: {
          providers: [Angulartics2GoogleAnalytics],
          settings : {}
        }
      }
    ]),
    CoreModule.forRoot([
      {
        provide   : ConfigLoader,
        useFactory: configFactory,
        deps      : [Injector]
      },
      {
        provide   : MetaLoader,
        useFactory: metaFactory,
        deps      : [ConfigService, TranslateService]
      }
    ]),
    SharedModule,
    HttpInterceptorModule,
    I18NModule.forRoot([
      {
        provide   : TranslateLoader,
        useFactory: translateFactory,
        deps      : [HttpClient]
      }
    ]),
    MaterialModule,
    StoreModule.forRoot()
  ],
  declarations   : [HeaderComponent, MainComponent, LoginComponent, AppComponent],
  providers      : [
    // I18N_ROUTER_PROVIDERS
    {
      provide : PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true},
  ],
  exports        : [AppComponent],
  entryComponents: [ChangeLanguageComponent],
  bootstrap      : [AppComponent]
})
export class AppModule {}
