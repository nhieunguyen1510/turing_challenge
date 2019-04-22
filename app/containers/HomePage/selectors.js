/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectLoading = () =>
  createSelector(selectHome, homeState => homeState.get('loading'));
  
const makeSelectProduct = () =>
  createSelector(selectHome, homeState => homeState.get('product'));

export { selectHome, makeSelectProduct, makeSelectLoading };
