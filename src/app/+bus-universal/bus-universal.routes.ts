/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/23/19 10:15 PM
 */

import { RenderFlag } from '~/@enoct/shared';

import { BuswayDetailContainerComponent } from './components/containers/busway-detail-container/busway-detail-container.component';
import { BuswayComponent } from './components/containers/busway/busway.component';

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
