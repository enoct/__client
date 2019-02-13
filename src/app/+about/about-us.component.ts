import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '~/@enoct/framework/core';
import { routeAnimation } from '~/@enoct/shared';

@Component({
  templateUrl    : './about-us.component.html',
  styleUrls      : ['about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations     : [routeAnimation]
})
export class AboutUsComponent extends BaseComponent {}
