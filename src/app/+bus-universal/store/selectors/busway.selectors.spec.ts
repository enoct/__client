/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 11:26 PM
 */

import { t } from '~/@enoct/framework/testing';

import { getError, getIsProcessing, getSelected, getSelectedId } from './busway.selectors';
import { BUSWAY } from '../state/busway.state';
import { MOCK_BUSWAY } from '../testing';

const MOCK_STORE = {
  [BUSWAY]: {
    ids       : [MOCK_BUSWAY._id],
    entities  : {[MOCK_BUSWAY._id]: MOCK_BUSWAY},
    selectedId: MOCK_BUSWAY._id
  }
};

t.describe('busway: getIsProcessing', () => {
  t.it('should return `isProcessing` on the state', () => {
    const actual = getIsProcessing(MOCK_STORE);

    t.e(actual).toBeFalsy();
  });
});

t.describe('busway: getError', () => {
  t.it('should return `error` on the state', () => {
    const actual = getError(MOCK_STORE);

    t.e(actual).toBeUndefined();
  });
});

t.describe('busway: getSelectedId', () => {
  t.it('should return `selectedId` on the state', () => {
    const actual = getSelectedId(MOCK_STORE);

    t.e(actual).toEqual(MOCK_BUSWAY._id);
  });
});

t.describe('busway: getSelected', () => {
  t.it('should return `selected` on the state', () => {
    const actual = getSelected(MOCK_STORE);

    t.e(actual).toEqual(MOCK_BUSWAY);
  });
});
