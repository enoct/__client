/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 12:25 PM
 */

import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslatePipe } from '@ngx-translate/core';
import { configureTestSuite } from 'ng-bullet';
import { AuthTestingModule } from '~/@enoct/framework/auth/testing';
import { CoreTestingModule } from '~/@enoct/framework/core/testing';
import { I18NTestingModule } from '~/@enoct/framework/i18n/testing';
import { MaterialModule } from '~/@enoct/framework/material';
import { NgrxTestingModule } from '~/@enoct/framework/ngrx/testing';
import { MockComponent, t, TestingModule } from '~/@enoct/framework/testing';

import { HeaderComponent } from './header.component';

const MOCK_ROUTES = [
  {
    path    : '',
    children: [
      {
        path     : '',
        component: MockComponent
      },
      {
        path     : 'login',
        component: MockComponent
      },
      {
        path     : 'change-language/:languageCode',
        component: MockComponent
      }
    ]
  }
];

configureTestSuite(() => {
  TestBed.configureTestingModule({
    imports     : [
      RouterTestingModule.withRoutes(MOCK_ROUTES),
      AuthTestingModule,
      CoreTestingModule,
      I18NTestingModule,
      NgrxTestingModule,
      TestingModule,
      MaterialModule
    ],
    declarations: [TranslatePipe, HeaderComponent]
  });
});

t.describe('layout: HeaderComponent', () => {
  t.it('should build without a problem', () => {
    const fixture  = TestBed.createComponent(HeaderComponent);
    const instance = fixture.componentInstance;
    fixture.detectChanges();

    t.e(instance).toBeTruthy();
  });

  t.it('should log out', () => {
    const fixture  = TestBed.createComponent(HeaderComponent);
    const instance = fixture.componentInstance;
    fixture.detectChanges();

    instance.isAuthenticated = true;
    fixture.detectChanges();

    const logoutButton = fixture.debugElement.query(By.css('button.qa-header__logout'));
    logoutButton.triggerEventHandler('click', {});

    t.e(instance.isAuthenticated).toBeFalsy();
  });
});