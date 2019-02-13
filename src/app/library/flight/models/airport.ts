import { BaseDocument } from '~/@enoct/framework/ngrx';

export interface Airport extends BaseDocument {
  iataCode: string;
  name: string;
}
