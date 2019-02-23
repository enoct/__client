/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 11:26 PM
 */

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { get, isNil } from 'lodash/fp';

import { adapter, BUSWAY, State } from '../state/busway.state';

const getState    = createFeatureSelector<State>(BUSWAY);
const {selectAll} = adapter.getSelectors(getState);

export const getIsProcessing = createSelector(
  getState,
  state => get('isProcessing')(state) || false
);
export const getError        = createSelector(
  getState,
  state => get('error')(state)
);

export const getSelectedId = createSelector(
  getState,
  state => get('selectedId')(state)
);
export const getSelected   = createSelector(
  get(`${BUSWAY}.entities`),
  getSelectedId,
  (entities, id) => !isNil(id) && entities[id]
);

export { selectAll as getMany };
