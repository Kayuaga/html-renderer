import { handleActions, createAction} from 'redux-actions';

import initialState from './initialState';

import { actions }from './actions';

export default handleActions({
    [createAction(actions.GET_TAB)]: (state, action) => ({
        ...state,
    }),

}, initialState);
