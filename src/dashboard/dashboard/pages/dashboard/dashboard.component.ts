import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfigService } from '@ngx-config/core';
import { BaseComponent } from '~/@enoct/framework/core';
import { languageActions, State } from '~/dashboard/shared/store';

@Component({
  selector       : 'app-dashboard',
  templateUrl    : './dashboard.component.html',
  styleUrls      : ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(private readonly store$: Store<State>, private readonly config: ConfigService) {
    super();
  }

  ngOnInit(): void {
    const settings = this.config.getSettings('i18n');
    this.store$.dispatch(languageActions.i18nInitLanguage(settings));
  }
}