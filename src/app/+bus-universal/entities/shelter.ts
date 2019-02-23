/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/23/19 10:47 PM
 */

import { BaseDocument } from '~/@enoct/framework/ngrx';

export interface Shelter extends BaseDocument {
  iataCode: string;
  name: string;
}
