/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 12:42 AM
 */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { cold, hot } from 'jasmine-marbles';
import { CoreTestingModule } from '~/@enoct/framework/core/testing';
import { EMPTY_UNIQUE_ID } from '~/@enoct/framework/ngrx';
import { NgrxTestingModule } from '~/@enoct/framework/ngrx/testing';
import { RouterTestingModule } from '~/@enoct/framework/router/testing';
import { t } from '~/@enoct/framework/testing';
import { ERROR__NO_PAYLOAD } from '~/@enoct/shared';

import { buswayActions } from './busway.actions';
import { BuswayEffects } from './busway.effects';
import { BuswayService } from './busway.service';
import { MOCK_BUSWAY, MOCK_BUSWAYS, MockBuswayService } from './testing';

const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports  : [HttpClientTestingModule, CoreTestingModule, NgrxTestingModule, RouterTestingModule],
    providers: [
      BuswayEffects,
      {
        provide : BuswayService,
        useClass: MockBuswayService
      }
    ]
  });
};

t.describe('busway: BuswayEffects', () => {
  t.be(() => {
    testModuleConfig();
  });

  t.it(
    'should build without a problem',
    t.inject([BuswayEffects], (effects: BuswayEffects) => {
      t.e(effects).toBeTruthy();
    })
  );

  t.describe('getMany$', () => {
    t.it(
      'should dispatch `busUniversalGetManyBuswaysSuccess` action, on success',
      t.inject([BuswayEffects], (effects: BuswayEffects) => {
        const action     = buswayActions.busUniversalGetManyBusways();
        const completion = buswayActions.busUniversalGetManyBuswaysSuccess(MOCK_BUSWAYS);

        const actions$  = TestBed.get(Actions);
        actions$.stream = hot('-a', {a: action});
        const expected  = cold('-c', {c: completion});

        t.e(effects.getMany$).toBeObservable(expected);
      })
    );

    t.it(
      'should dispatch `busUniversalGetManyBuswaysFail` action, on fail',
      t.inject([BuswayEffects, BuswayService], (effects: BuswayEffects, busway: MockBuswayService) => {
        busway.isFailing = true;

        const action     = buswayActions.busUniversalGetManyBusways();
        const completion = buswayActions.busUniversalGetManyBuswaysFail(ERROR__NO_PAYLOAD.message);

        const actions$  = TestBed.get(Actions);
        actions$.stream = hot('-a', {a: action});
        const expected  = cold('-c', {c: completion});

        t.e(effects.getMany$).toBeObservable(expected);
      })
    );
  });

  t.describe('getOne$', () => {
    t.it(
      'should dispatch `busUniversalGetOneBuswaySuccess` action, on success',
      t.inject([BuswayEffects], (effects: BuswayEffects) => {
        const action     = buswayActions.busUniversalGetOneBusway(MOCK_BUSWAY._id);
        const completion = buswayActions.busUniversalGetOneBuswaySuccess(MOCK_BUSWAY);

        const actions$  = TestBed.get(Actions);
        actions$.stream = hot('-a', {a: action});
        const expected  = cold('-c', {c: completion});

        t.e(effects.getOne$).toBeObservable(expected);
      })
    );

    t.it(
      'should dispatch `busUniversalGetOneBuswayFail` action, w/o payload',
      t.inject([BuswayEffects], (effects: BuswayEffects) => {
        const action     = buswayActions.busUniversalGetOneBusway(undefined);
        const completion = buswayActions.busUniversalGetOneBuswayFail(ERROR__NO_PAYLOAD.message);

        const actions$  = TestBed.get(Actions);
        actions$.stream = hot('-a', {a: action});
        const expected  = cold('-c', {c: completion});

        t.e(effects.getOne$).toBeObservable(expected);
      })
    );

    t.it(
      'should dispatch `busUniversalGetOneBuswayFail` action, on fail',
      t.inject([BuswayEffects, BuswayService], (effects: BuswayEffects, busway: MockBuswayService) => {
        busway.isFailing = true;

        const action     = buswayActions.busUniversalGetOneBusway(MOCK_BUSWAY._id);
        const completion = buswayActions.busUniversalGetOneBuswayFail(ERROR__NO_PAYLOAD.message);

        const actions$  = TestBed.get(Actions);
        actions$.stream = hot('-a', {a: action});
        const expected  = cold('-c', {c: completion});

        t.e(effects.getOne$).toBeObservable(expected);
      })
    );
  });

  t.describe('createOne$', () => {
    t.it(
      'should dispatch `busUniversalCreateOneBuswaySuccess` action, on success',
      t.inject([Router, BuswayEffects], (router: Router, effects: BuswayEffects) => {
        const action     = buswayActions.busUniversalCreateOneBusway({
          resource: MOCK_BUSWAY,
          router,
          route   : []
        });
        const completion = buswayActions.busUniversalCreateOneBuswaySuccess(MOCK_BUSWAY);

        const actions$  = TestBed.get(Actions);
        actions$.stream = hot('-a', {a: action});
        const expected  = cold('-c', {c: completion});

        t.e(effects.createOne$).toBeObservable(expected);
      })
    );

    t.it(
      'should dispatch `busUniversalCreateOneBuswayFail` action, w/o payload',
      t.inject([Router, BuswayEffects], (router: Router, effects: BuswayEffects) => {
        const action     = buswayActions.busUniversalCreateOneBusway({
          resource: undefined,
          router,
          route   : []
        });
        const completion = buswayActions.busUniversalCreateOneBuswayFail({
          id   : EMPTY_UNIQUE_ID,
          error: ERROR__NO_PAYLOAD.message
        });

        const actions$  = TestBed.get(Actions);
        actions$.stream = hot('-a', {a: action});
        const expected  = cold('-c', {c: completion});

        t.e(effects.createOne$).toBeObservable(expected);
      })
    );

    t.it(
      'should dispatch `busUniversalCreateOneBuswayFail` action, on fail',
      t.inject([Router, BuswayEffects, BuswayService], (
        router: Router,
        effects: BuswayEffects,
        busway: MockBuswayService
      ) => {
        busway.isFailing = true;

        const action     = buswayActions.busUniversalCreateOneBusway({
          resource: MOCK_BUSWAY,
          router,
          route   : []
        });
        const completion = buswayActions.busUniversalCreateOneBuswayFail({
          id   : EMPTY_UNIQUE_ID,
          error: ERROR__NO_PAYLOAD.message
        });

        const actions$  = TestBed.get(Actions);
        actions$.stream = hot('-a', {a: action});
        const expected  = cold('-c', {c: completion});

        t.e(effects.createOne$).toBeObservable(expected);
      })
    );
  });

  t.describe('updateOne$', () => {
    t.it(
      'should dispatch `busUniversalUpdateOneBuswaySuccess` action, on success',
      t.inject([Router, BuswayEffects], (router: Router, effects: BuswayEffects) => {
        const action     = buswayActions.busUniversalUpdateOneBusway({
          resource: MOCK_BUSWAY,
          router,
          route   : []
        });
        const completion = buswayActions.busUniversalUpdateOneBuswaySuccess(MOCK_BUSWAY);

        const actions$  = TestBed.get(Actions);
        actions$.stream = hot('-a', {a: action});
        const expected  = cold('-c', {c: completion});

        t.e(effects.updateOne$).toBeObservable(expected);
      })
    );

    t.it(
      'should dispatch `busUniversalUpdateOneBuswayFail` action, w/o payload',
      t.inject([Router, BuswayEffects], (router: Router, effects: BuswayEffects) => {
        const action     = buswayActions.busUniversalUpdateOneBusway({
          resource: undefined,
          router,
          route   : []
        });
        const completion = buswayActions.busUniversalUpdateOneBuswayFail({
          id   : EMPTY_UNIQUE_ID,
          error: ERROR__NO_PAYLOAD.message
        });

        const actions$  = TestBed.get(Actions);
        actions$.stream = hot('-a', {a: action});
        const expected  = cold('-c', {c: completion});

        t.e(effects.updateOne$).toBeObservable(expected);
      })
    );

    t.it(
      'should dispatch `busUniversalUpdateOneBuswayFail` action, on fail',
      t.inject([Router, BuswayEffects, BuswayService], (
        router: Router,
        effects: BuswayEffects,
        busway: MockBuswayService
      ) => {
        busway.isFailing = true;

        const action     = buswayActions.busUniversalUpdateOneBusway({
          resource: MOCK_BUSWAY,
          router,
          route   : []
        });
        const completion = buswayActions.busUniversalUpdateOneBuswayFail({
          id   : MOCK_BUSWAY._id,
          error: ERROR__NO_PAYLOAD.message
        });

        const actions$  = TestBed.get(Actions);
        actions$.stream = hot('-a', {a: action});
        const expected  = cold('-c', {c: completion});

        t.e(effects.updateOne$).toBeObservable(expected);
      })
    );
  });

  t.describe('deleteOne$', () => {
    t.it(
      'should dispatch `busUniversalDeleteOneBuswaySuccess` action, on success',
      t.inject([Router, BuswayEffects], (router: Router, effects: BuswayEffects) => {
        const action     = buswayActions.busUniversalDeleteOneBusway({
          id   : MOCK_BUSWAY._id,
          router,
          route: []
        });
        const completion = buswayActions.busUniversalDeleteOneBuswaySuccess(MOCK_BUSWAY._id);

        const actions$  = TestBed.get(Actions);
        actions$.stream = hot('-a', {a: action});
        const expected  = cold('-c', {c: completion});

        t.e(effects.deleteOne$).toBeObservable(expected);
      })
    );

    t.it(
      'should dispatch `busUniversalDeleteOneBuswayFail` action, w/o payload',
      t.inject([Router, BuswayEffects], (router: Router, effects: BuswayEffects) => {
        const action     = buswayActions.busUniversalDeleteOneBusway({
          id   : undefined,
          router,
          route: []
        });
        const completion = buswayActions.busUniversalDeleteOneBuswayFail({
          id   : undefined,
          error: ERROR__NO_PAYLOAD.message
        });

        const actions$  = TestBed.get(Actions);
        actions$.stream = hot('-a', {a: action});
        const expected  = cold('-c', {c: completion});

        t.e(effects.deleteOne$).toBeObservable(expected);
      })
    );

    t.it(
      'should dispatch `busUniversalDeleteOneBuswayFail` action, on fail',
      t.inject([Router, BuswayEffects, BuswayService], (
        router: Router,
        effects: BuswayEffects,
        busway: MockBuswayService
      ) => {
        busway.isFailing = true;

        const action     = buswayActions.busUniversalDeleteOneBusway({
          id   : MOCK_BUSWAY._id,
          router,
          route: []
        });
        const completion = buswayActions.busUniversalDeleteOneBuswayFail({
          id   : MOCK_BUSWAY._id,
          error: ERROR__NO_PAYLOAD.message
        });

        const actions$  = TestBed.get(Actions);
        actions$.stream = hot('-a', {a: action});
        const expected  = cold('-c', {c: completion});

        t.e(effects.deleteOne$).toBeObservable(expected);
      })
    );
  });
});
