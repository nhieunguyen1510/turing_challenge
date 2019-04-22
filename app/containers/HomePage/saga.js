/**
 * Gets the repositories of the user from Github
 */

import { call, put, fork } from 'redux-saga/effects';

import { LOAD_REPOS } from 'containers/App/constants';

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
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield fork(getFirstProduct);
  // yield takeLatest(LOAD_REPOS, getRepos);
}
