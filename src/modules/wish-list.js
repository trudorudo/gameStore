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
                wishListData: pushToWishList(state.wishListData, action.payload)
            }
        case REMOVE_FROM_WISH_LIST:
            return {
                ...state,
                wishListData: removeFromWishList(state.wishListData, action.payload)
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

export const addToWishList = (item) => ({
    type: ADD_TO_WISH_LIST,
    payload: item
})
export const removeFromWishListAction = (item) => ({
    type: REMOVE_FROM_WISH_LIST,
    payload: item
});
