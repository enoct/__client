/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/23/19 10:15 PM
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { flow } from 'lodash/fp';
import { of as observableOf } from 'rxjs';
import { CoreTestingModule } from '~/@enoct/framework/core/testing';
import { I18NTestingModule } from '~/@enoct/framework/i18n/testing';
import { MaterialModule } from '~/@enoct/framework/material';
import { EMPTY_UNIQUE_ID } from '~/@enoct/framework/ngrx';
import { getState, NgrxTestingModule } from '~/@enoct/framework/ngrx/testing';
import { t } from '~/@enoct/framework/testing';
import { RenderFlag, SharedModule } from '~/@enoct/shared';
import { CardModule } from '~/@enoct/shared/card';
import { BUSWAY, Busway, buswayActions } from '~/app/store';
import { MOCK_BUSWAY } from '~/app/store/testing';

import { BuswayDetailContainerComponent } from './busway-detail-container.component';
import { BuswayDetailComponent } from '../../forms/busway-detail/busway-detail.component';

const testModuleConfig = (renderFlag = RenderFlag.Create) => {
  TestBed.configureTestingModule({
    imports     : [
      ReactiveFormsModule,
      RouterTestingModule,
      CoreTestingModule,
      I18NTestingModule,
      NgrxTestingModule,
      MaterialModule,
      CardModule,
      SharedModule
    ],
    providers   : [
      {
        provide : ActivatedRoute,
        useValue: {
          data  : observableOf({
            renderFlag,
            meta: {
              title: 'PAGE_TITLE'
            }
          }),
          params: observableOf({
            id: renderFlag === RenderFlag.Update ? MOCK_BUSWAY._id : EMPTY_UNIQUE_ID
          })
        }
      }
    ],
    declarations: [BuswayDetailContainerComponent, BuswayDetailComponent]
  });
};

t.describe('BuswayDetailContainerComponent', () => {
  t.be(() => {
    testModuleConfig();
  });

  t.it('should build without a problem', () => {
    const fixture  = TestBed.createComponent(BuswayDetailContainerComponent);
    const instance = fixture.componentInstance;
    fixture.detectChanges();

    t.e(instance).toBeTruthy();
  });

  t.it('should `getSelected` from BuswaySelectors on init', () => {
    const fixture  = TestBed.createComponent(BuswayDetailContainerComponent);
    const instance = fixture.componentInstance;
    const store$   = TestBed.get(Store);
    const state    = getState<Busway>(BUSWAY, MOCK_BUSWAY);
    store$.setState(state);
    fixture.detectChanges();

    const expected = cold('a', {a: MOCK_BUSWAY});

    t.e(instance.busway$).toBeObservable(expected);
  });

  t.it('should dispatch `busUniversalAddOneBusway` action on init', () => {
    const fixture = TestBed.createComponent(BuswayDetailContainerComponent);
    const store$  = TestBed.get(Store);
    const spy     = t.spyOn(store$, 'dispatch');
    fixture.detectChanges();

    const action = buswayActions.busUniversalAddOneBusway();

    t.e(spy).toHaveBeenCalledWith(action);
    t.e(spy).toHaveBeenCalledTimes(1);
  });

  t.it('should dispatch `busUniversalCreateOneBusway` action on save', () => {
    const fixture  = TestBed.createComponent(BuswayDetailContainerComponent);
    const instance = fixture.componentInstance;
    const store$   = TestBed.get(Store);
    const spy      = t.spyOn(store$, 'dispatch');
    fixture.detectChanges();

    const saveClick = flow(
      (cur: ComponentFixture<BuswayDetailContainerComponent>) => cur.debugElement.query(By.directive(BuswayDetailComponent)),
      cur => cur.componentInstance,
      cur => cur.saveClick
    )(fixture);
    const resource  = {_id: EMPTY_UNIQUE_ID, ...MOCK_BUSWAY};
    saveClick.emit(MOCK_BUSWAY);

    const router = fixture.debugElement.injector.get(Router);
    const action = buswayActions.busUniversalCreateOneBusway({
      resource,
      router,
      route: instance.baseRoute
    });

    t.e(spy).toHaveBeenCalledWith(action);
    t.e(spy).toHaveBeenCalledTimes(2);
  });
});

t.describe('BuswayDetailContainerComponent for renderFlag=`Update`', () => {
  t.be(() => {
    testModuleConfig(RenderFlag.Update);
  });

  t.it('should dispatch `busUniversalGetOneBusway` action on init', () => {
    const fixture = TestBed.createComponent(BuswayDetailContainerComponent);
    const store$  = TestBed.get(Store);
    const spy     = t.spyOn(store$, 'dispatch');
    fixture.detectChanges();

    const action = buswayActions.busUniversalGetOneBusway(MOCK_BUSWAY._id);

    t.e(spy).toHaveBeenCalledWith(action);
    t.e(spy).toHaveBeenCalledTimes(1);
  });

  t.it('should dispatch `busUniversalUpdateOneBusway` action on save', () => {
    const fixture  = TestBed.createComponent(BuswayDetailContainerComponent);
    const instance = fixture.componentInstance;
    const store$   = TestBed.get(Store);
    const spy      = t.spyOn(store$, 'dispatch');
    fixture.detectChanges();

    const saveClick = flow(
      (cur: ComponentFixture<BuswayDetailContainerComponent>) => cur.debugElement.query(By.directive(BuswayDetailComponent)),
      cur => cur.componentInstance,
      cur => cur.saveClick
    )(fixture);
    saveClick.emit(MOCK_BUSWAY);

    const router = fixture.debugElement.injector.get(Router);
    const action = buswayActions.busUniversalUpdateOneBusway({
      resource: MOCK_BUSWAY,
      router,
      route   : instance.baseRoute
    });

    t.e(spy).toHaveBeenCalledWith(action);
    t.e(spy).toHaveBeenCalledTimes(2);
  });

  t.it('should dispatch `busUniversalDeleteOneBusway` action on delete', () => {
    const fixture  = TestBed.createComponent(BuswayDetailContainerComponent);
    const instance = fixture.componentInstance;
    const store$   = TestBed.get(Store);
    const spy      = t.spyOn(store$, 'dispatch');
    fixture.detectChanges();

    const deleteClick = flow(
      (cur: ComponentFixture<BuswayDetailContainerComponent>) => cur.debugElement.query(By.directive(BuswayDetailComponent)),
      cur => cur.componentInstance,
      cur => cur.deleteClick
    )(fixture);
    deleteClick.emit(MOCK_BUSWAY._id);

    const router = fixture.debugElement.injector.get(Router);
    const action = buswayActions.busUniversalDeleteOneBusway({
      id   : MOCK_BUSWAY._id,
      router,
      route: instance.baseRoute
    });

    t.e(spy).toHaveBeenCalledWith(action);
    t.e(spy).toHaveBeenCalledTimes(2);
  });
});
