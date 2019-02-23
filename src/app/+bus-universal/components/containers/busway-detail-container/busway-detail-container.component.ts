/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 10:32 PM
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { MetaService } from '@ngx-meta/core';
import { TranslateService } from '@ngx-translate/core';
import { getOr, isNil } from 'lodash/fp';
import { Observable, of as observableOf, zip } from 'rxjs';
import { skipWhile, switchMap, takeUntil } from 'rxjs/operators';
import { BaseContainerComponent } from '~/@enoct/framework/core';
import { UniqueId } from '~/@enoct/framework/ngrx';
import { RenderFlag, routeAnimation } from '~/@enoct/shared';
import { Busway, buswayActions, BuswaySelectors, State } from '~/app/store';

@Component({
  templateUrl    : './busway-detail-container.component.html',
  styleUrls      : ['./busway-detail-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations     : [routeAnimation]
})
export class BuswayDetailContainerComponent extends BaseContainerComponent implements OnInit {
  busway$: Observable<Busway>;
  baseRoute: Array<string>;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly translate: TranslateService,
    private readonly meta: MetaService,
    protected readonly store$: Store<State>
  ) {
    super(store$);
  }

  ngOnInit(): void {
    this.baseRoute = ['/', 'bus-universal', 'busway'];

    this.isProcessing$ = this.store$.pipe(select(BuswaySelectors.getIsProcessing));
    this.error$        = this.store$.pipe(select(BuswaySelectors.getError));
    this.busway$       = this.store$.pipe(select(BuswaySelectors.getSelected));

    this.busway$
      .pipe(
        skipWhile(isNil),
        switchMap(res => zip(this.route.data, observableOf(res))),
        switchMap(([data, busway]) => zip(this.translate.get(data.meta.title), observableOf(busway))),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(([title, busway]: Array<any>) => {
        const subtitle = getOr('')('name')(busway);

        this.meta.setTitle(subtitle ? `${title} - ${subtitle}` : title);
      });

    zip(this.route.data, this.route.params)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(([data, params]) => {
        if (data.renderFlag === RenderFlag.Create) {
          this.store$.dispatch(buswayActions.busUniversalAddOneBusway());
        } else {
          this.store$.dispatch(buswayActions.busUniversalGetOneBusway(params.id));
        }
      });
  }

  delete(id: UniqueId): void {
    this.store$.dispatch(
      buswayActions.busUniversalDeleteOneBusway({
        id,
        router: this.router,
        route : this.baseRoute
      })
    );
  }

  save(resource: any): void {
    this.route.data.pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => {
      if (res.renderFlag === RenderFlag.Create) {
        this.store$.dispatch(
          buswayActions.busUniversalCreateOneBusway({
            resource,
            router: this.router,
            route : this.baseRoute
          })
        );
      } else {
        this.store$.dispatch(
          buswayActions.busUniversalUpdateOneBusway({
            resource,
            router: this.router,
            route : this.baseRoute
          })
        );
      }
    });
  }
}
