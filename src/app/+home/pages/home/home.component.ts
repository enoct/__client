/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 1:02 PM
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '~/@enoct/framework/core';
import { routeAnimation } from '~/@enoct/shared';

@Component({
  templateUrl    : './home.component.html',
  styleUrls      : ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations     : [routeAnimation]
})
export class HomeComponent extends BaseComponent {}
