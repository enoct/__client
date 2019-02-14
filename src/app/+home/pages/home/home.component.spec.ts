/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 1:03 PM
 */

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTestSuite } from 'ng-bullet';
import { SharedModule } from '~/@enoct/framework/core';
import { CoreTestingModule } from '~/@enoct/framework/core/testing';
import { I18NTestingModule } from '~/@enoct/framework/i18n/testing';
import { MaterialModule } from '~/@enoct/framework/material';
import { t } from '~/@enoct/framework/testing';

import { HomeComponent } from './home.component';

configureTestSuite(() => {
  TestBed.configureTestingModule({
    imports     : [RouterTestingModule, CoreTestingModule, I18NTestingModule, SharedModule, MaterialModule],
    declarations: [HomeComponent]
  });
});

t.describe('HomeComponent', () => {
  t.it('should build without a problem', () => {
    const fixture  = TestBed.createComponent(HomeComponent);
    const instance = fixture.componentInstance;
    fixture.detectChanges();

    t.e(instance).toBeTruthy();
  });
});
