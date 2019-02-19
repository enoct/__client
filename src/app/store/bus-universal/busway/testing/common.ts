/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/18/19 6:33 PM
 */

import { head } from 'lodash/fp';
import { initialBusway } from "~/app/store";

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
