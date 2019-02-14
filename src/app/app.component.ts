/**
 * app.component.ts
 * Created by @anonymoussc on 02/14/2019 11:34 AM.
 */

/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 11:35 AM
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfigService } from '@ngx-config/core';
import { BaseComponent } from '~/@enoct/framework/core';
import { languageActions, State } from '~/app/store';

@Component({
  selector       : 'app-root',
  templateUrl    : './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent extends BaseComponent implements OnInit {
  constructor(private readonly store$: Store<State>, private readonly config: ConfigService) {
    super();
  }

  ngOnInit(): void {
    const settings = this.config.getSettings('i18n');
    this.store$.dispatch(languageActions.i18nInitLanguage(settings));
  }
}
