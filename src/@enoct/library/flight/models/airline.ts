import { BaseDocument } from '~/@enoct/framework/ngrx';

export interface Airline extends BaseDocument {
  iataCode: string;
  name: string;
}
