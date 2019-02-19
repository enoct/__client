/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/18/19 3:45 PM
 */

import { State as BuswayState } from './busway/busway.state';

export interface State {
  busway: BuswayState;
}
