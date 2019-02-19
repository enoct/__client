/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 2:10 AM
 */

import { EMPTY_UNIQUE_ID, entityReducer } from '~/@enoct/framework/ngrx';
import { t } from '~/@enoct/framework/testing';
import { ERROR__NO_PAYLOAD } from '~/@enoct/shared';

import { buswayActions } from './busway.actions';
import { reducer } from './busway.reducer';
import { initialState } from './busway.state';
import { MOCK_BUSWAY, MOCK_BUSWAYS } from './testing';

t.describe('busway: busway.reducer', () => {
  it('should return the initial state', () => {
    const action = {} as any;
    const res    = reducer(undefined, action);

    t.e(res).toEqual(initialState);
  });

  t.describe('busUniversalGetManyBusways', () => {
    t.it('should return the `isProcessing` on the state', () => {
      const action = buswayActions.busUniversalGetManyBusways();
      const res    = reducer(initialState, action);

      t.e(res.isProcessing).toBeTruthy();
    });
  });

  t.describe('busUniversalGetManyBuswaysSuccess', () => {
    t.it('should return the `ids & entities` on the state', () => {
      const action = buswayActions.busUniversalGetManyBuswaysSuccess(MOCK_BUSWAYS);
      const res    = reducer(initialState, action);

      const ids      = MOCK_BUSWAYS.map(cur => cur._id);
      const entities = MOCK_BUSWAYS.reduce(entityReducer, undefined);

      t.e(res.ids).toEqual(ids);
      t.e(res.entities).toEqual(entities);
      t.e(res.isProcessing).toBeFalsy();
    });
  });

  t.describe('busUniversalGetManyBuswaysFail', () => {
    t.it('should return the `error` on the state', () => {
      const action = buswayActions.busUniversalGetManyBuswaysFail(ERROR__NO_PAYLOAD.message);
      const res    = reducer(initialState, action);

      t.e(res.isProcessing).toBeFalsy();
      t.e(res.error).toEqual(ERROR__NO_PAYLOAD.message);
    });
  });

  t.describe('busUniversalGetOneBusway', () => {
    t.it('should return the `isProcessing` on the state', () => {
      const action = buswayActions.busUniversalGetOneBusway(MOCK_BUSWAY._id);
      const res    = reducer(initialState, action);

      t.e(res.isProcessing).toBeTruthy();
    });
  });

  t.describe('busUniversalGetOneBuswaySuccess', () => {
    t.it('should return the `selectedId` on the state', () => {
      const action = buswayActions.busUniversalGetOneBuswaySuccess(MOCK_BUSWAY);
      const res    = reducer(initialState, action);

      t.e(res.selectedId).toEqual(MOCK_BUSWAY._id);
      t.e(res.isProcessing).toBeFalsy();
    });
  });

  t.describe('busUniversalGetOneBuswayFail', () => {
    t.it('should return the `error` on the state', () => {
      const action = buswayActions.busUniversalGetOneBuswayFail(ERROR__NO_PAYLOAD.message);
      const res    = reducer(initialState, action);

      t.e(res.isProcessing).toBeFalsy();
      t.e(res.error).toEqual(ERROR__NO_PAYLOAD.message);
    });
  });

  t.describe('busUniversalAddOneBusway', () => {
    t.it('should return the `selectedId` on the state', () => {
      const action = buswayActions.busUniversalAddOneBusway();
      const res    = reducer(initialState, action);

      t.e(res.selectedId).toEqual(EMPTY_UNIQUE_ID);
    });
  });

  t.describe('busUniversalCreateOneBusway', () => {
    t.it('should return the `isProcessing` on the state', () => {
      const action = buswayActions.busUniversalCreateOneBusway({
        resource: MOCK_BUSWAY,
        router  : undefined,
        route   : []
      });
      const res    = reducer(initialState, action);

      t.e(res.isProcessing).toBeTruthy();
    });
  });

  t.describe('busUniversalCreateOneBuswaySuccess', () => {
    t.it('should return the `ids & entities` on the state', () => {
      const add      = buswayActions.busUniversalAddOneBusway();
      const addState = reducer(initialState, add);
      const action   = buswayActions.busUniversalCreateOneBuswaySuccess(MOCK_BUSWAY);
      const res      = reducer(addState, action);

      const ids      = [MOCK_BUSWAY._id];
      const entities = {[MOCK_BUSWAY._id]: MOCK_BUSWAY};

      t.e(res.ids).toEqual(ids);
      t.e(res.entities).toEqual(entities);
      t.e(res.isProcessing).toBeFalsy();
    });
  });

  t.describe('busUniversalCreateOneBuswayFail', () => {
    t.it('should return the `error` on the state', () => {
      const action = buswayActions.busUniversalCreateOneBuswayFail({
        id   : EMPTY_UNIQUE_ID,
        error: ERROR__NO_PAYLOAD.message
      });
      const res    = reducer(initialState, action);

      t.e(res.isProcessing).toBeFalsy();
      t.e(res.error).toEqual(ERROR__NO_PAYLOAD.message);
    });
  });

  t.describe('busUniversalUpdateOneBusway', () => {
    t.it('should return the `isProcessing` on the state', () => {
      const action = buswayActions.busUniversalUpdateOneBusway({
        resource: MOCK_BUSWAY,
        router  : undefined,
        route   : []
      });
      const res    = reducer(initialState, action);

      t.e(res.isProcessing).toBeTruthy();
    });
  });

  t.describe('busUniversalUpdateOneBuswaySuccess', () => {
    t.it('should return the `ids & entities` on the state', () => {
      const add         = buswayActions.busUniversalAddOneBusway();
      const addState    = reducer(initialState, add);
      const create      = buswayActions.busUniversalCreateOneBuswaySuccess(MOCK_BUSWAY);
      const createState = reducer(addState, create);
      const action      = buswayActions.busUniversalUpdateOneBuswaySuccess(MOCK_BUSWAY);
      const res         = reducer(createState, action);

      const ids      = [MOCK_BUSWAY._id];
      const entities = {[MOCK_BUSWAY._id]: MOCK_BUSWAY};

      t.e(res.ids).toEqual(ids);
      t.e(res.entities).toEqual(entities);
      t.e(res.isProcessing).toBeFalsy();
    });
  });

  t.describe('busUniversalUpdateOneBuswayFail', () => {
    t.it('should return the `error` on the state', () => {
      const action = buswayActions.busUniversalUpdateOneBuswayFail({
        id   : EMPTY_UNIQUE_ID,
        error: ERROR__NO_PAYLOAD.message
      });
      const res    = reducer(initialState, action);

      t.e(res.isProcessing).toBeFalsy();
      t.e(res.error).toEqual(ERROR__NO_PAYLOAD.message);
    });
  });

  t.describe('busUniversalDeleteOneBusway', () => {
    t.it('should return the `isProcessing` on the state', () => {
      const action = buswayActions.busUniversalDeleteOneBusway({
        id    : MOCK_BUSWAY._id,
        router: undefined,
        route : []
      });
      const res    = reducer(initialState, action);

      t.e(res.isProcessing).toBeTruthy();
    });
  });

  t.describe('busUniversalDeleteOneBuswaySuccess', () => {
    t.it('should return the `ids & entities` on the state', () => {
      const add         = buswayActions.busUniversalAddOneBusway();
      const addState    = reducer(initialState, add);
      const create      = buswayActions.busUniversalCreateOneBuswaySuccess(MOCK_BUSWAY);
      const createState = reducer(addState, create);
      const action      = buswayActions.busUniversalDeleteOneBuswaySuccess(MOCK_BUSWAY._id);
      const res         = reducer(createState, action);

      t.e(res.ids).toEqual([]);
      t.e(res.entities).toEqual({});
      t.e(res.isProcessing).toBeFalsy();
    });
  });

  t.describe('busUniversalDeleteOneBuswayFail', () => {
    t.it('should return the `error` on the state', () => {
      const action = buswayActions.busUniversalDeleteOneBuswayFail({
        id   : EMPTY_UNIQUE_ID,
        error: ERROR__NO_PAYLOAD.message
      });
      const res    = reducer(initialState, action);

      t.e(res.isProcessing).toBeFalsy();
      t.e(res.error).toEqual(ERROR__NO_PAYLOAD.message);
    });
  });
});
