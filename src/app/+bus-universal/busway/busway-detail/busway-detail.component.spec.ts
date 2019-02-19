/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 10:32 PM
 */

import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { of as observableOf } from 'rxjs';
import { CoreTestingModule } from '~/@enoct/framework/core/testing';
import { I18NTestingModule } from '~/@enoct/framework/i18n/testing';
import { MaterialModule } from '~/@enoct/framework/material';
import { EMPTY_UNIQUE_ID } from '~/@enoct/framework/ngrx';
import { t } from '~/@enoct/framework/testing';
import { RenderFlag, SharedModule } from '~/@enoct/shared';
import { CardModule } from '~/@enoct/shared/card';
import { MOCK_BUSWAY } from '~/app/store/testing';

import { BuswayDetailComponent } from './busway-detail.component';

const testModuleConfig = (renderFlag = RenderFlag.Create) => {
  TestBed.configureTestingModule({
    imports     : [ReactiveFormsModule, CoreTestingModule, I18NTestingModule, MaterialModule, CardModule, SharedModule],
    providers   : [
      {
        provide : ActivatedRoute,
        useValue: {
          data  : observableOf({
            renderFlag,
            meta: {
              title: 'PAGE_TITLE'
            }
          }),
          params: observableOf({
            id: renderFlag === RenderFlag.Update ? MOCK_BUSWAY._id : EMPTY_UNIQUE_ID
          })
        }
      }
    ],
    declarations: [BuswayDetailComponent]
  });
};

t.describe('BuswayDetailComponent', () => {
  t.be(() => {
    testModuleConfig();
  });

  t.it('should build without a problem', () => {
    const fixture  = TestBed.createComponent(BuswayDetailComponent);
    const instance = fixture.componentInstance;
    fixture.detectChanges();

    t.e(instance).toBeTruthy();
  });

  t.it('should emit `saveClick` on save button click', () => {
    const fixture  = TestBed.createComponent(BuswayDetailComponent);
    const instance = fixture.componentInstance;
    const spy      = t.spyOn(instance.saveClick, 'emit');
    fixture.detectChanges();

    const saveButton = fixture.debugElement.query(By.css('button.qa-form__button--save'));
    saveButton.triggerEventHandler('click', {});

    t.e(spy).toHaveBeenCalled();
  });
});

t.describe('busway-detail: BuswayDetailComponent for renderFlag=`Update`', () => {
  t.be(() => {
    testModuleConfig(RenderFlag.Update);
  });

  t.it('should build without a problem', () => {
    const fixture   = TestBed.createComponent(BuswayDetailComponent);
    const instance  = fixture.componentInstance;
    instance.busway = MOCK_BUSWAY;
    fixture.detectChanges();

    t.e(instance).toBeTruthy();
  });

  t.it('should emit `deleteClick` on delete button click', () => {
    const fixture  = TestBed.createComponent(BuswayDetailComponent);
    const instance = fixture.componentInstance;
    const spy      = t.spyOn(instance.deleteClick, 'emit');
    fixture.detectChanges();

    const deleteButton = fixture.debugElement.query(By.css('button.qa-form__button--delete'));
    deleteButton.triggerEventHandler('click', {});

    t.e(spy).toHaveBeenCalled();
  });
});
