/**
 * Gets the repositories of the user from Github
 */

import { call, put, fork } from 'redux-saga/effects';

import axios from 'utils/axios';
import logger from 'utils/logger';
import { productLoaded } from './actions';

function* getFirstProduct() {
  try {
    const { data: { rows } } = yield call([axios, 'get'], '/products', {
      params: {
        limit: 1,
      },
    });
    const firstProduct = rows && rows.length === 1 ? rows[0] : null;
    yield put(productLoaded(firstProduct));
  } catch (err) {
    yield call([logger, 'logError'], err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield fork(getFirstProduct);
}
