/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { LOAD_PRODUCT_SUCCESS } from './constants';

// The initial state of the App
export const initialState = fromJS({
  product: null,
  loading: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCT_SUCCESS:
      return state.set('product', action.product);
    default:
      return state;
  }
}

export default homeReducer;
