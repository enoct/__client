import { FrameworkState } from '~/@enoct/framework/store';

import { AirUniversalState } from './air-universal';

export interface State extends FrameworkState {
  airUniversal: AirUniversalState;
}
