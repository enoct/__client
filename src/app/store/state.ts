/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 3:28 AM
 */

import { FrameworkState } from '~/@enoct/framework/store';

import { AirUniversalState } from './air-universal';
import { BusUniversalState } from './bus-universal';

export interface State extends FrameworkState {
  airUniversal: AirUniversalState;
  busUniversal: BusUniversalState;
}
