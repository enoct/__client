/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 11:26 PM
 */

import { head } from 'lodash/fp';

import { initialBusway } from "../entities/busway.model";

export const MOCK_BUSWAYS = [
  {
    ...initialBusway,
    _id: '100000000000000000000001'
  },
  {
    ...initialBusway,
    _id: '100000000000000000000002'
  }
];

export const MOCK_BUSWAY = head(MOCK_BUSWAYS);
