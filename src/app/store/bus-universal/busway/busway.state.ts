/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/18/19 3:40 PM
 */

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { UniqueId } from '~/@enoct/framework/ngrx';

import { Busway } from './busway.model';

export const BUSWAY = 'travel--busway';

export interface State extends EntityState<Busway> {
  selectedId: UniqueId;
  isProcessing?: boolean;
  error?: any;
}

export const adapter: EntityAdapter<Busway> = createEntityAdapter<Busway>({
  selectId: cur => cur._id
});

export const initialState: State = adapter.getInitialState({
  selectedId  : undefined,
  isProcessing: false,
  error       : undefined
});
