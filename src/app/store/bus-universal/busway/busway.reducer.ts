/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 10:32 PM
 */

import {
  EMPTY_UNIQUE_ID,
  entityErrorFn,
  entityResetFn,
  entityStartProcessingFn,
  entityStopProcessingFn,
  UniqueId
} from '~/@enoct/framework/ngrx';

import { BuswayAction, buswayActions } from './busway.actions';
import { Busway, initialBusway } from './busway.model';
import { adapter, initialState, State } from './busway.state';

// NOTE: for AoT compilation
// tslint:disable-next-line
export function reducer(state: State = initialState, action: BuswayAction): State {
  return buswayActions.match({
    busUniversalGetManyBusways        : () => entityStartProcessingFn<State>(state),
    busUniversalGetManyBuswaysSuccess : (busways: Array<Busway>) => adapter.addAll(busways, entityStopProcessingFn<State>(state)),
    busUniversalGetManyBuswaysFail    : entityErrorFn<State>(state),
    busUniversalGetOneBusway          : () => entityStartProcessingFn<State>(state),
    busUniversalGetOneBuswaySuccess   : (busway: Busway) =>
      adapter.addOne(busway, {
        ...entityStopProcessingFn<State>(state),
        selectedId: busway._id
      }),
    busUniversalGetOneBuswayFail      : entityErrorFn<State>(state),
    busUniversalAddOneBusway          : () =>
      adapter.addOne(initialBusway, {
        ...entityStopProcessingFn<State>(state),
        selectedId: EMPTY_UNIQUE_ID
      }),
    busUniversalCreateOneBusway       : () => entityStartProcessingFn<State>(state),
    busUniversalCreateOneBuswaySuccess: (busway: Busway) =>
      adapter.updateOne(
        {
          id     : EMPTY_UNIQUE_ID,
          changes: busway
        },
        {
          ...entityStopProcessingFn<State>(state),
          selectedId: undefined
        }
      ),
    busUniversalCreateOneBuswayFail   : entityResetFn<State>(state),
    busUniversalUpdateOneBusway       : () => entityStartProcessingFn<State>(state),
    busUniversalUpdateOneBuswaySuccess: (busway: Busway) =>
      adapter.updateOne(
        {
          id     : busway._id,
          changes: busway
        },
        {
          ...entityStopProcessingFn<State>(state),
          selectedId: undefined
        }
      ),
    busUniversalUpdateOneBuswayFail   : entityResetFn<State>(state),
    busUniversalDeleteOneBusway       : () => entityStartProcessingFn<State>(state),
    busUniversalDeleteOneBuswaySuccess: (id: UniqueId) =>
      adapter.removeOne(id, {
        ...entityStopProcessingFn<State>(state),
        selectedId: undefined
      }),
    busUniversalDeleteOneBuswayFail   : entityResetFn<State>(state),
    default                           : () => state
  })(action);
}
