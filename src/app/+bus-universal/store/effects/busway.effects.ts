/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 11:26 PM
 */

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { flow, get, isEmpty, isNil, negate } from 'lodash/fp';
import { of as observableOf } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { EMPTY_UNIQUE_ID } from '~/@enoct/framework/ngrx';
import { ERROR__NO_PAYLOAD } from '~/@enoct/shared';

import { BuswayService } from '../../services/busway.service';
import { buswayActions } from '../actions/busway.actions';

@Injectable()
export class BuswayEffects {
  @Effect() getMany$ = this.actions$.pipe(
    filter(buswayActions.is.busUniversalGetManyBusways),
    switchMap(() =>
      this.busway.getMany$().pipe(
        map(buswayActions.busUniversalGetManyBuswaysSuccess),
        catchError(error => observableOf(buswayActions.busUniversalGetManyBuswaysFail(error.message)))
      )
    )
  );

  @Effect() getOne$ = this.actions$.pipe(
    filter(buswayActions.is.busUniversalGetOneBusway),
    map(get('payload')),
    switchMap(payload =>
      !isEmpty(payload)
        ? this.busway.getOne$(payload).pipe(
        map(buswayActions.busUniversalGetOneBuswaySuccess),
        catchError(error => observableOf(buswayActions.busUniversalGetOneBuswayFail(error.message)))
        )
        : observableOf(buswayActions.busUniversalGetOneBuswayFail(ERROR__NO_PAYLOAD.message))
    )
  );

  @Effect() createOne$ = this.actions$.pipe(
    filter(buswayActions.is.busUniversalCreateOneBusway),
    map(get('payload')),
    switchMap(payload =>
      flow(
        get('resource'),
        negate(isNil)
      )(payload)
        ? this.busway.createOne$(payload.resource).pipe(
        map(buswayActions.busUniversalCreateOneBuswaySuccess),
        tap(async () => payload.router.navigate(payload.route)),
        catchError(error =>
          observableOf(
            buswayActions.busUniversalCreateOneBuswayFail({
              id   : EMPTY_UNIQUE_ID,
              error: error.message
            })
          )
        )
        )
        : observableOf(
        buswayActions.busUniversalCreateOneBuswayFail({
          id   : EMPTY_UNIQUE_ID,
          error: ERROR__NO_PAYLOAD.message
        })
        )
    )
  );

  @Effect() updateOne$ = this.actions$.pipe(
    filter(buswayActions.is.busUniversalUpdateOneBusway),
    map(get('payload')),
    switchMap(payload =>
      flow(
        get('_id'),
        negate(isNil)
      )(payload.resource)
        ? this.busway.updateOne$(payload.resource).pipe(
        map(buswayActions.busUniversalUpdateOneBuswaySuccess),
        tap(async () => payload.router.navigate(payload.route)),
        catchError(error =>
          observableOf(
            buswayActions.busUniversalUpdateOneBuswayFail({
              id   : payload.resource._id,
              error: error.message
            })
          )
        )
        )
        : observableOf(
        buswayActions.busUniversalUpdateOneBuswayFail({
          id   : EMPTY_UNIQUE_ID,
          error: ERROR__NO_PAYLOAD.message
        })
        )
    )
  );

  @Effect() deleteOne$ = this.actions$.pipe(
    filter(buswayActions.is.busUniversalDeleteOneBusway),
    map(get('payload')),
    switchMap(payload =>
      !isNil(payload.id)
        ? this.busway.deleteOne$(payload.id).pipe(
        map(buswayActions.busUniversalDeleteOneBuswaySuccess),
        tap(async () => payload.router.navigate(payload.route)),
        catchError(error =>
          observableOf(
            buswayActions.busUniversalDeleteOneBuswayFail({
              id   : payload.id,
              error: error.message
            })
          )
        )
        )
        : observableOf(
        buswayActions.busUniversalDeleteOneBuswayFail({
          id   : payload.id,
          error: ERROR__NO_PAYLOAD.message
        })
        )
    )
  );

  constructor(private readonly actions$: Actions, private readonly busway: BuswayService) {}
}
