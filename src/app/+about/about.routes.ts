/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 1:16 PM
 */

import { AboutApplePearComponent } from './pages/about-apple-pear/about-apple-pear.component';
import { AboutBananaComponent } from './pages/about-banana/about-banana.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AboutComponent } from './pages/about/about.component';

export const routes = [
  {
    path     : '',
    component: AboutComponent,
    data     : {
      meta: {
        title      : 'PUBLIC.ABOUT.ABOUT.PAGE_TITLE',
        description: 'PUBLIC.ABOUT.ABOUT.META_DESCRIPTION'
      }
    }
  },
  {
    path     : 'us/:topicId',
    component: AboutUsComponent,
    data     : {
      meta: {
        title      : 'PUBLIC.ABOUT.ABOUT_US.PAGE_TITLE',
        description: 'PUBLIC.ABOUT.ABOUT_US.META_DESCRIPTION'
      }
    }
  },
  {
    path     : 'banana',
    component: AboutBananaComponent,
    data     : {
      meta: {
        title      : 'PUBLIC.ABOUT.ABOUT_BANANA.PAGE_TITLE',
        description: 'PUBLIC.ABOUT.ABOUT_BANANA.META_DESCRIPTION'
      }
    }
  },
  {
    path     : 'apple/:fruitId/pear',
    component: AboutApplePearComponent,
    data     : {
      meta: {
        title      : 'PUBLIC.ABOUT.ABOUT_APPLE_PEAR.PAGE_TITLE',
        description: 'PUBLIC.ABOUT.ABOUT_APPLE_PEAR.META_DESCRIPTION'
      }
    }
  }
];
