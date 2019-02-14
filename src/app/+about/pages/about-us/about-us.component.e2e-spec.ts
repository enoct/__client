/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 1:22 PM
 */

import { baseUrl, browser } from 'e2e-config';
import { e2e } from '~/@enoct/framework/testing/e2e';

e2e.describe('AboutUsComponent', () => {
  e2e.it('should have title', async () => {
    const page = browser.goto(`${baseUrl}/about/us/22`);

    const text = await page.evaluate(() => document.title).end();

    e2e.e(text).toContain('Us | signoir/angband');
  });
});
