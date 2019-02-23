/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 10:32 PM
 */

import { TestBed } from '@angular/core/testing';
import { FlexModule } from '@angular/flex-layout';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { configureTestSuite } from 'ng-bullet';
import { CoreTestingModule } from '~/@enoct/framework/core/testing';
import { I18NTestingModule } from '~/@enoct/framework/i18n/testing';
import { MaterialModule } from '~/@enoct/framework/material';
import { getState, NgrxTestingModule } from '~/@enoct/framework/ngrx/testing';
import { RouterTestingModule } from '~/@enoct/framework/router/testing';
import { t } from '~/@enoct/framework/testing';
import { SharedModule } from '~/@enoct/shared';
import { DataTableModule } from '~/@enoct/shared/data-table';
import { BUSWAY, Busway, buswayActions } from '~/app/store';
import { MOCK_BUSWAY } from '~/app/store/testing';

import { BuswayComponent } from './busway.component';

configureTestSuite(() => {
  TestBed.configureTestingModule({
    imports     : [
      RouterTestingModule,
      FlexModule,
      CoreTestingModule,
      I18NTestingModule,
      NgrxTestingModule,
      MaterialModule,
      DataTableModule,
      SharedModule
    ],
    declarations: [BuswayComponent]
  });
});

t.describe('BuswayComponent', () => {
  t.it('should build without a problem', () => {
    const fixture  = TestBed.createComponent(BuswayComponent);
    const instance = fixture.componentInstance;
    fixture.detectChanges();

    t.e(instance).toBeTruthy();
  });

  t.it('should `getMany` from BuswaySelectors on init', () => {
    const fixture  = TestBed.createComponent(BuswayComponent);
    const instance = fixture.componentInstance;
    const store$   = TestBed.get(Store);
    const state    = getState<Busway>(BUSWAY, MOCK_BUSWAY);
    store$.setState(state);
    fixture.detectChanges();

    const expected = cold('a', {a: [MOCK_BUSWAY]});

    t.e(instance.busway$).toBeObservable(expected);
  });

  t.it('should dispatch `busUniversalGetManyAirlines` action on init', () => {
    const fixture = TestBed.createComponent(BuswayComponent);
    const store$  = fixture.debugElement.injector.get(Store);
    const spy     = t.spyOn(store$, 'dispatch');
    fixture.detectChanges();

    const action = buswayActions.busUniversalGetManyBusways();

    t.e(spy).toHaveBeenCalledWith(action);
    t.e(spy).toHaveBeenCalledTimes(1);
  });

  t.it(
    'should navigate to `create` on create button click',
    t.inject([Router], (router: Router) => {
      const fixture  = TestBed.createComponent(BuswayComponent);
      const instance = fixture.componentInstance;
      const spy      = t.spyOn(router, 'navigate');
      fixture.detectChanges();

      const menu = fixture.debugElement.query(By.css('.qa-menu'));
      menu.triggerEventHandler('click', {});
      const createButton = fixture.debugElement.query(By.css('.qa-menu_item__create'));
      createButton.triggerEventHandler('click', {});

      t.e(spy).toHaveBeenCalledWith([...instance.baseRoute, 'create']);
      t.e(spy).toHaveBeenCalledTimes(1);
    })
  );

  t.it('should dispatch `busUniversalGetManyBusways` action on refresh button click', () => {
    const fixture = TestBed.createComponent(BuswayComponent);
    const store$  = fixture.debugElement.injector.get(Store);
    const spy     = t.spyOn(store$, 'dispatch');
    fixture.detectChanges();

    const refreshButton = fixture.debugElement.query(By.css('button.qa-toolbar__refresh'));
    refreshButton.triggerEventHandler('click', {});

    const action = buswayActions.busUniversalGetManyBusways();

    t.e(spy).toHaveBeenCalledWith(action);
    t.e(spy).toHaveBeenCalledTimes(2);
  });
});
