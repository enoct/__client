/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 3/6/19 10:17 AM
 */

import { NgModule } from '@angular/core';
import { BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { CACHE } from '@ngx-cache/core';
import { BrowserCacheModule, MemoryCacheService } from '@ngx-cache/platform-browser';
import 'hammerjs';
import { AuthLoader, AuthModule } from '~/@enoct/framework/auth';
import { AuthTestingModule } from '~/@enoct/framework/auth/testing';
import { ConsoleService, CoreModule, WindowService } from '~/@enoct/framework/core';

import { AppComponent } from './app.component';
import { AppModule, REQ_KEY } from './app.module';
import { authFactory } from './login/services/auth.factory'

@NgModule({
  imports  : [
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    BrowserCacheModule.forRoot([
      {
        provide : CACHE,
        useClass: MemoryCacheService
      }
    ]),
    AuthModule.forRoot({
      provide   : AuthLoader,
      useFactory: (authFactory)
    }),
    AuthTestingModule,
    CoreModule.forRoot([
      {
        provide   : WindowService,
        useFactory: () => window
      },
      {
        provide   : ConsoleService,
        useFactory: () => console
      }
    ]),
    AppModule
  ],
  providers: [
    {
      provide   : REQUEST,
      useFactory: (transferState: TransferState) => transferState.get<any>(REQ_KEY, {}),
      deps      : [TransferState]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
