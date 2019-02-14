/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 12:54 PM
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '~/@enoct/framework/core';
import { routeAnimation } from '~/@enoct/shared';

@Component({
  templateUrl    : './secure.component.html',
  styleUrls      : ['./secure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations     : [routeAnimation]
})
export class SecureComponent extends BaseComponent {}
