/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 12:42 AM
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '@ngx-config/core';
import { EMPTY, Observable, of as observableOf } from 'rxjs';
import { delay, map, retry } from 'rxjs/operators';
import { BaseEntityService, HTTP_CLIENT__MAX_RETRIES, UniqueId } from '~/@enoct/framework/ngrx';

import { Busway } from './busway.model';

@Injectable({
  providedIn: 'root'
})
export class BuswayService extends BaseEntityService<Busway> {
  delay: number;

  constructor(protected readonly config: ConfigService, protected readonly http: HttpClient) {
    super(config, http, ['backend', 'travel', 'busway']);

    this.delay = 2000;
  }

  getMany$(): Observable<Array<Busway>> {
    const backend = this.config.getSettings(this.settingsKey);

    return this.http.get<Array<Busway>>(backend.endpoint).pipe(
      delay(this.delay), // NOTE: simulate slow network
      retry(HTTP_CLIENT__MAX_RETRIES)
    );
  }

  getOne$(id: UniqueId): Observable<Busway> {
    const backend = this.config.getSettings(this.settingsKey);

    return this.http.get<Array<Busway>>(backend.endpoint).pipe(
      delay(this.delay), // NOTE: simulate slow network
      retry(HTTP_CLIENT__MAX_RETRIES),
      map(cur => cur.find(item => item._id === id))
    );
  }

  createMany$(resources: Array<Busway>): Observable<Array<Busway>> {
    return EMPTY;
  }

  createOne$(resource: Busway): Observable<Busway> {
    // NOTE: fake impl
    return observableOf({
      ...resource,
      _id: '100000000000000000000001'
    }).pipe(delay(this.delay)); // NOTE: simulate slow network
  }

  updateMany$(resources: Array<Busway>): Observable<Array<Busway>> {
    return EMPTY;
  }

  updateOne$(resource: Busway): Observable<Busway> {
    // NOTE: fake impl
    return observableOf(resource).pipe(delay(this.delay)); // NOTE: simulate slow network
  }

  deleteMany$(ids: Array<UniqueId>): Observable<Array<UniqueId>> {
    return EMPTY;
  }

  deleteOne$(id: UniqueId): Observable<UniqueId> {
    // NOTE: fake impl
    return observableOf(id).pipe(delay(this.delay)); // NOTE: simulate slow network
  }
}
