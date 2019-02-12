import { EMPTY_UNIQUE_ID } from '~/@enoct/framework/ngrx';
import { Airline } from '~/dashboard/shared/library/flight/models/airline.ts';

export { Airline };

export const initialAirline: Airline = {
  _id     : EMPTY_UNIQUE_ID,
  iataCode: '',
  name    : ''
};
