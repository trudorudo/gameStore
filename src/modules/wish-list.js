import { createSelector } from "reselect";
import { pushToWishList, removeFromWishList } from '../utils/appUtils';

/**
  CONSTANTS
*/

export const moduleName = 'wish-list';

export const ADD_TO_WISH_LIST = `${moduleName}/ADD_TO_WISH_LIST`;
export const REMOVE_FROM_WISH_LIST = `${moduleName}/REMOVE_FROM_WISH_LIST`;

/**
 REDUCER
*/

const initialRecord = {
    wishListData: []
}

export default function wishListReducer(state = initialRecord, action = {}) {
    switch (action.type) {
        case ADD_TO_WISH_LIST:
            return {
                ...state,
                wishListData: action.payload
            }
        case REMOVE_FROM_WISH_LIST:
            return {
                ...state,
                wishListData: action.payload
            }
        default:
            return state;
    }
}

/**
 SELECTORS
 */

export const moduleSelector = state => state[moduleName]
export const wishListDataSelector = createSelector(moduleSelector, state => state.wishListData);


/**
ACTION CREATORS
*/

export const addToWishList = (item) => (dispatch, getState) => {
    dispatch({
        type: ADD_TO_WISH_LIST,
        payload: pushToWishList(getState()[moduleName].wishListData, item)
    })
}

export const removeFromWishListAction = (item) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_WISH_LIST,
        payload: removeFromWishList(getState()[moduleName].wishListData, item)
    })
}