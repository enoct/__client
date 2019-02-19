/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/18/19 3:40 PM
 */

import { BaseDocument } from '~/@enoct/framework/ngrx';

export interface Busway extends BaseDocument {
  iataCode: string;
  name: string;
}
