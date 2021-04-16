const SCOPE = 'gameList/';

export const ADD_TO_WISH_LIST = `${SCOPE}ADD_TO_WISH_LIST`;
export const REMOVE_FROM_WISH_LIST = `${SCOPE}REMOVE_FROM_WISH_LIST`;


const addToWishList = (obj) => ({
    type: ADD_TO_WISH_LIST,
    payload: obj
});
const removeFromWishList = (obj) => ({
    type: REMOVE_FROM_WISH_LIST,
    payload: obj
});

export default {
    addToWishList,
    removeFromWishList
}