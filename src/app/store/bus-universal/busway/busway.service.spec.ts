/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 3:18 AM
 */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CoreTestingModule } from '~/@enoct/framework/core/testing';
import { EMPTY_UNIQUE_ID } from '~/@enoct/framework/ngrx';
import { t } from '~/@enoct/framework/testing';

import { BuswayService } from './busway.service';
import { MOCK_BUSWAY, MOCK_BUSWAYS } from './testing';

const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports  : [HttpClientTestingModule, CoreTestingModule],
    providers: [BuswayService]
  });
};

t.describe('busway: BuswayService', () => {
  t.be(() => {
    testModuleConfig();
  });

  t.it(
    'should build without a problem',
    t.inject([BuswayService], (busway: BuswayService) => {
      t.e(busway).toBeTruthy();
    })
  );

  t.it(
    'should `getMany$`',
    t.async(
      t.inject([BuswayService, HttpTestingController], (busway: BuswayService, http: HttpTestingController) => {
        busway.delay = 0;
        busway.getMany$().subscribe(res => {
          t.e(res).toEqual(MOCK_BUSWAYS);
        });

        http
          .expectOne({
            method: 'GET',
            url   : '{baseUrl}/assets/data/airlines.json'
          })
          .flush(MOCK_BUSWAYS);
        http.verify();
      })
    )
  );

  t.it(
    'should `getOne$`',
    t.async(
      t.inject([BuswayService, HttpTestingController], (busway: BuswayService, http: HttpTestingController) => {
        busway.delay = 0;
        busway.getOne$(MOCK_BUSWAY._id).subscribe(res => {
          t.e(res).toEqual(MOCK_BUSWAY);
        });

        http
          .expectOne({
            method: 'GET',
            url   : '{baseUrl}/assets/data/airlines.json'
          })
          .flush(MOCK_BUSWAYS);
        http.verify();
      })
    )
  );

  t.it(
    'should block `createMany$`',
    t.async(
      t.inject([BuswayService], (busway: BuswayService) => {
        busway.createMany$(undefined).subscribe(res => {
          t.e(res).toBeUndefined();
        });
      })
    )
  );

  t.it(
    'should `createOne$`',
    t.async(
      t.inject([BuswayService], (busway: BuswayService) => {
        busway.delay = 0;
        busway.createOne$(MOCK_BUSWAY).subscribe(res => {
          t.e(res).toEqual(MOCK_BUSWAY);
        });
      })
    )
  );

  t.it(
    'should block `updateMany$`',
    t.async(
      t.inject([BuswayService], (busway: BuswayService) => {
        busway.updateMany$(undefined).subscribe(res => {
          t.e(res).toBeUndefined();
        });
      })
    )
  );

  t.it(
    'should `updateOne$`',
    t.async(
      t.inject([BuswayService], (busway: BuswayService) => {
        busway.delay = 0;
        busway.updateOne$(MOCK_BUSWAY).subscribe(res => {
          t.e(res).toEqual(MOCK_BUSWAY);
        });
      })
    )
  );

  t.it(
    'should block `deleteMany$`',
    t.async(
      t.inject([BuswayService], (busway: BuswayService) => {
        busway.deleteMany$([EMPTY_UNIQUE_ID]).subscribe(res => {
          t.e(res).toBeUndefined();
        });
      })
    )
  );

  t.it(
    'should `deleteOne$`',
    t.async(
      t.inject([BuswayService], (busway: BuswayService) => {
        busway.delay = 0;
        busway.deleteOne$(MOCK_BUSWAY._id).subscribe(res => {
          t.e(res).toEqual(MOCK_BUSWAY._id);
        });
      })
    )
  );
});
