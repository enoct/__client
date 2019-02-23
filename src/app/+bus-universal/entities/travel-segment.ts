/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/23/19 10:47 PM
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
