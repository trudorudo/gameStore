import { 
    ADD_TO_WISH_LIST, 
    REMOVE_FROM_WISH_LIST
} from '../actions/wishListActions';
import { pushToWishList, removeFromWishList } from '../utils/appUtils';

const initialState = {
    wishListData: []
}

const wishListReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_TO_WISH_LIST:
            return {
                ...state,
                wishListData: pushToWishList(state.wishListData, action.payload)
            };
        case REMOVE_FROM_WISH_LIST:
            return {
                ...state,
                wishListData: removeFromWishList(state.wishListData, action.payload)
            }
        default:
            return state;
    }
}


export default wishListReducer;