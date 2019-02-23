/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 11:26 PM
 */

import { FrameworkState } from '~/@enoct/framework/store';

import { BusUniversalState } from '../+bus-universal/store';

import { AirUniversalState } from './air-universal';

export interface State extends FrameworkState {
  airUniversal: AirUniversalState;
  busUniversal: BusUniversalState;
}
