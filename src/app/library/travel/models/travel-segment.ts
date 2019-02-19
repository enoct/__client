/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 3:28 AM
 */

import { BaseDocument } from '~/@enoct/framework/ngrx';

import { Busway } from './busway';
import { Shelter } from './shelter';

export interface TravelSegment extends BaseDocument {
  iataCode: string;
  airline: Busway;
  carrier: Busway;
  departure: Shelter;
  arrival: Shelter;
}
