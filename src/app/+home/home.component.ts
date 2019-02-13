import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '~/@enoct/framework/core';
import { routeAnimation } from '~/@enoct/shared';

@Component({
  templateUrl    : './home.component.html',
  styleUrls      : ['home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations     : [routeAnimation]
})
export class HomeComponent extends BaseComponent {}
