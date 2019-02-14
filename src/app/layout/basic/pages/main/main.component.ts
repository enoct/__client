/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 12:14 PM
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '~/@enoct/framework/core';

@Component({
  selector       : 'app-main',
  templateUrl    : './main.component.html',
  styleUrls      : ['main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent extends BaseComponent {
  onActivate(event$: any, scrollContainer: any): void {
    scrollContainer.scrollTop = 0;
  }
}
