/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 10:32 PM
 */

import { BaseDocument } from '~/@enoct/framework/ngrx';

import { Shelter } from './shelter';
import { TravelSegment } from './travel-segment';

export interface Travel extends BaseDocument {
  departure: Shelter;
  arrival: Shelter;
  segments: Array<TravelSegment>;
}
