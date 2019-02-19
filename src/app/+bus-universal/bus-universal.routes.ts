/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/18/19 2:00 PM
 */

import { RenderFlag } from '~/@enoct/shared';

import { BuswayDetailContainerComponent } from './busway/busway-detail/busway-detail-container.component';
import { BuswayComponent } from './busway/busway.component';

export const routes = [
  {
    path    : '',
    children: [
      {
        path    : 'busway',
        children: [
          {
            path     : '',
            component: BuswayComponent,
            data     : {
              meta: {
                title      : 'PUBLIC.BUS_UNIVERSAL.BUSWAY.PAGE_TITLE',
                description: 'PUBLIC.BUS_UNIVERSAL.META_DESCRIPTION'
              }
            }
          },
          {
            path     : 'create',
            component: BuswayDetailContainerComponent,
            data     : {
              renderFlag: RenderFlag.Create,
              meta      : {
                title      : 'PUBLIC.BUS_UNIVERSAL.BUSWAY.BUSWAY_DETAIL.PAGE_TITLE',
                description: 'PUBLIC.BUS_UNIVERSAL.META_DESCRIPTION'
              }
            }
          },
          {
            path     : ':id',
            component: BuswayDetailContainerComponent,
            data     : {
              renderFlag: RenderFlag.Update,
              meta      : {
                title      : 'PUBLIC.BUS_UNIVERSAL.BUSWAY.BUSWAY_DETAIL.PAGE_TITLE',
                description: 'PUBLIC.BUS_UNIVERSAL.META_DESCRIPTION'
              }
            }
          }
        ]
      }
    ]
  }
];
