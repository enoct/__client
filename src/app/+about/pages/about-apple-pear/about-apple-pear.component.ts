/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 1:16 PM
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '~/@enoct/framework/core';
import { routeAnimation } from '~/@enoct/shared';

@Component({
  templateUrl    : './about-apple-pear.component.html',
  styleUrls      : ['./about-apple-pear.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations     : [routeAnimation]
})
export class AboutApplePearComponent extends BaseComponent {}
