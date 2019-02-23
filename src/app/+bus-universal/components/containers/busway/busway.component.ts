/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 10:32 PM
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { from as observableFrom, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseContainerComponent } from '~/@enoct/framework/core';
import { routeAnimation, Scrollable } from '~/@enoct/shared';
import { createColumn, createOptions, createRouteButton, DataTable } from '~/@enoct/shared/data-table';
import { Busway, buswayActions, BuswaySelectors, State } from '~/app/store';

@Component({
  templateUrl    : './busway.component.html',
  styleUrls      : ['./busway.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations     : [routeAnimation]
})
export class BuswayComponent extends BaseContainerComponent implements OnInit {
  busway$: Observable<Array<Busway>>;
  baseRoute: Array<any>;
  buswayTable: DataTable;

  constructor(private readonly router: Router, protected readonly store$: Store<State>) {
    super(store$);
  }

  ngOnInit(): void {
    this.baseRoute = ['/', 'bus-universal', 'busway'];

    this.buswayTable = {
      cols     : [
        createColumn('_id', 'PUBLIC.BUS_UNIVERSAL.BUSWAY.BUSWAY_TABLE.ID_COL_TITLE'),
        createColumn('iataCode', 'PUBLIC.BUS_UNIVERSAL.BUSWAY.BUSWAY_TABLE.IATA_CODE_COL_TITLE'),
        createColumn('name', 'PUBLIC.BUS_UNIVERSAL.BUSWAY.BUSWAY_TABLE.NAME_COL_TITLE')
      ],
      filterCol: 'name',
      buttons  : [createRouteButton('', 'edit', 'PUBLIC.SHARED.ACTION.EDIT', this.baseRoute, '_id')],
      options  : createOptions('', 'PUBLIC.BUS_UNIVERSAL.BUSWAY.BUSWAY_TABLE.TITLE', Scrollable.Full)
    };

    this.isProcessing$ = this.store$.pipe(select(BuswaySelectors.getIsProcessing));
    this.error$        = this.store$.pipe(select(BuswaySelectors.getError));
    this.busway$       = this.store$.pipe(select(BuswaySelectors.getMany));

    this.store$.dispatch(buswayActions.busUniversalGetManyBusways());
  }

  createBusway(): void {
    observableFrom(this.router.navigate([...this.baseRoute, 'create']))
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        /**/
      });
  }

  refresh(): void {
    this.store$.dispatch(buswayActions.busUniversalGetManyBusways());
  }
}
