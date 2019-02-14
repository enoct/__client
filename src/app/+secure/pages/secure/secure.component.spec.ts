/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/13/19 9:11 PM
 */

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTestSuite } from 'ng-bullet';
import { SharedModule } from '~/@enoct/framework/core';
import { CoreTestingModule } from '~/@enoct/framework/core/testing';
import { I18NTestingModule } from '~/@enoct/framework/i18n/testing';
import { MaterialModule } from '~/@enoct/framework/material';
import { t } from '~/@enoct/framework/testing';

import { SecureComponent } from './secure.component';

configureTestSuite(() => {
  TestBed.configureTestingModule({
    imports     : [RouterTestingModule, CoreTestingModule, I18NTestingModule, SharedModule, MaterialModule],
    declarations: [SecureComponent]
  });
});

t.describe('SecureComponent', () => {
  t.it('should build without a problem', () => {
    const fixture  = TestBed.createComponent(SecureComponent);
    const instance = fixture.componentInstance;
    fixture.detectChanges();

    t.e(instance).toBeTruthy();
  });
});
