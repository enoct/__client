/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 12:07 PM
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@ngx-auth/core';
import { TranslateService } from '@ngx-translate/core';
import { from as observableFrom, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '~/@enoct/framework/core';
import { routeAnimation } from '~/@enoct/shared';

@Component({
  templateUrl    : './login.component.html',
  styleUrls      : ['./login.component.scss'],
  animations     : [routeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent extends BaseComponent implements OnInit {
  username: string;
  password: string;
  isProcessing: boolean;
  note$: Observable<string>;
  error$: Observable<string>;

  constructor(
    private readonly auth: AuthService,
    private readonly translate: TranslateService,
    private readonly router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated) {
      observableFrom(this.router.navigateByUrl(this.auth.defaultUrl))
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(() => {
          /**/
        });
    }
  }

  login(): Observable<boolean> {
    this.isProcessing = true;
    this.note$        = this.translate.get('PUBLIC.LOGIN.NOTE');

    const auth$ = this.auth.authenticate(this.username, this.password).pipe(takeUntil(this.ngUnsubscribe));

    auth$.subscribe(() => {
      this.isProcessing = false;

      if (!this.auth.isAuthenticated) {
        this.error$ = this.translate.get('PUBLIC.LOGIN.ERROR');
      }
    });

    return auth$;
  }
}
