/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 12:20 AM
 */

import { Observable, of as observableOf, throwError } from 'rxjs';
import { UniqueId } from '~/@enoct/framework/ngrx';
import { ERROR__NO_PAYLOAD } from '~/@enoct/shared';

import { Busway } from '../../busway.model';
import { MOCK_BUSWAY, MOCK_BUSWAYS } from '../common';

export class MockBuswayService {
  isFailing: boolean;

  constructor() {
    this.isFailing = false;
  }

  getMany$(): Observable<Array<Busway>> {
    return !this.isFailing ? observableOf(MOCK_BUSWAYS) : throwError(ERROR__NO_PAYLOAD);
  }

  getOne$(id: UniqueId): Observable<Busway> {
    return !this.isFailing
      ? observableOf({
        ...MOCK_BUSWAY,
        _id: id
      })
      : throwError(ERROR__NO_PAYLOAD);
  }

  createOne$(resource: Busway): Observable<Busway> {
    return !this.isFailing ? observableOf(resource) : throwError(ERROR__NO_PAYLOAD);
  }

  updateOne$(resource: Busway): Observable<Busway> {
    return !this.isFailing ? observableOf(resource) : throwError(ERROR__NO_PAYLOAD);
  }

  deleteOne$(id: UniqueId): Observable<UniqueId> {
    return !this.isFailing ? observableOf(id) : throwError(ERROR__NO_PAYLOAD);
  }
}
