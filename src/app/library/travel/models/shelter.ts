/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 3:28 AM
 */

import { BaseDocument } from '~/@enoct/framework/ngrx';

export interface Shelter extends BaseDocument {
  iataCode: string;
  name: string;
}
