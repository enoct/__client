/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 12:25 PM
 */

import { CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTestSuite } from 'ng-bullet';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CoreTestingModule } from '~/@enoct/framework/core/testing';
import { I18NTestingModule } from '~/@enoct/framework/i18n/testing';
import { NgrxTestingModule } from '~/@enoct/framework/ngrx/testing';
import { t } from '~/@enoct/framework/testing';

import { MainComponent } from './main.component';

configureTestSuite(() => {
  TestBed.configureTestingModule({
    imports     : [
      RouterTestingModule,
      PerfectScrollbarModule,
      CoreTestingModule,
      I18NTestingModule,
      NgrxTestingModule
    ],
    declarations: [MainComponent],
    schemas     : [CUSTOM_ELEMENTS_SCHEMA]
  });
});

t.describe('layout: MainComponent', () => {
  t.it('should build without a problem', () => {
    const fixture  = TestBed.createComponent(MainComponent);
    const instance = fixture.componentInstance;
    fixture.detectChanges();

    t.e(instance).toBeTruthy();
  });

  t.it(
    'should invoke `onActivate`',
    t.inject([ElementRef], (scrollContainer: ElementRef) => {
      const fixture  = TestBed.createComponent(MainComponent);
      const instance = fixture.componentInstance;
      fixture.detectChanges();

      instance.onActivate(undefined, scrollContainer);

      t.e(instance).toBeTruthy();
    })
  );
});