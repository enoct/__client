/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 11:26 PM
 */

import { Router } from '@angular/router';
import { ofType, unionize, UnionOf } from 'unionize';
import { UniqueId } from '~/@enoct/framework/ngrx';

import { Busway } from '../entities/busway.model';

export const buswayActions = unionize(
  {
    busUniversalGetManyBusways        : {},
    busUniversalGetManyBuswaysSuccess : ofType<Array<Busway>>(),
    busUniversalGetManyBuswaysFail    : ofType<string>(),
    busUniversalGetOneBusway          : ofType<UniqueId>(),
    busUniversalGetOneBuswaySuccess   : ofType<Busway>(),
    busUniversalGetOneBuswayFail      : ofType<string>(),
    busUniversalAddOneBusway          : {},
    busUniversalCreateOneBusway       : ofType<{ resource: Busway; router: Router; route: Array<string> }>(),
    busUniversalCreateOneBuswaySuccess: ofType<Busway>(),
    busUniversalCreateOneBuswayFail   : ofType<{ id: UniqueId; error: string }>(),
    busUniversalUpdateOneBusway       : ofType<{ resource: Busway; router: Router; route: Array<string> }>(),
    busUniversalUpdateOneBuswaySuccess: ofType<Busway>(),
    busUniversalUpdateOneBuswayFail   : ofType<{ id: UniqueId; error: string }>(),
    busUniversalDeleteOneBusway       : ofType<{ id: UniqueId; router: Router; route: Array<string> }>(),
    busUniversalDeleteOneBuswaySuccess: ofType<UniqueId>(),
    busUniversalDeleteOneBuswayFail   : ofType<{ id: UniqueId; error: string }>()
  },
  {
    tag  : 'type',
    value: 'payload'
  }
);
export type BuswayAction = UnionOf<typeof buswayActions>;
