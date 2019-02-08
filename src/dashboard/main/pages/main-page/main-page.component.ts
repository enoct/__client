import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '~/@enoct/framework/core';
import { routeAnimation } from '~/@enoct/shared';

@Component({
  selector       : 'app-main-page',
  templateUrl    : './main-page.component.html',
  styleUrls      : ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations     : [routeAnimation]
})
export class MainPageComponent extends BaseComponent {}
