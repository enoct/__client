/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 1:22 PM
 */

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTestSuite } from 'ng-bullet';
import { SharedModule } from '~/@enoct/framework/core';
import { CoreTestingModule } from '~/@enoct/framework/core/testing';
import { I18NTestingModule } from '~/@enoct/framework/i18n/testing';
import { MaterialModule } from '~/@enoct/framework/material';
import { t } from '~/@enoct/framework/testing';

import { AboutComponent } from './about.component';

configureTestSuite(() => {
  TestBed.configureTestingModule({
    imports     : [RouterTestingModule, CoreTestingModule, I18NTestingModule, SharedModule, MaterialModule],
    declarations: [AboutComponent]
  });
});

t.describe('AboutComponent', () => {
  t.it('should build without a problem', () => {
    const fixture  = TestBed.createComponent(AboutComponent);
    const instance = fixture.componentInstance;
    fixture.detectChanges();

    t.e(instance).toBeTruthy();
  });
});