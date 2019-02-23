/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/23/19 10:15 PM
 */

import { EMPTY_UNIQUE_ID } from '~/@enoct/framework/ngrx';
import { Busway } from '~/app/+bus-universal/entities/busway';

export { Busway };

export const initialBusway: Busway = {
  _id     : EMPTY_UNIQUE_ID,
  iataCode: '',
  name    : ''
};
