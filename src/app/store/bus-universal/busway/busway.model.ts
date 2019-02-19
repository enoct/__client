/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/18/19 3:40 PM
 */

import { EMPTY_UNIQUE_ID } from '~/@enoct/framework/ngrx';
import { Busway } from '~/app/library/travel/models/busway.ts';

export { Busway };

export const initialBusway: Busway = {
  _id     : EMPTY_UNIQUE_ID,
  iataCode: '',
  name    : ''
};
