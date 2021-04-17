import {fetchGameList} from '../service/gameStoreService';

const SCOPE = 'gameList/';

export const GET_GAME_LIST = `${SCOPE}GET_GAME_LIST`;
export const ADD_TO_WISH_LIST = `${SCOPE}ADD_TO_WISH_LIST`;

const getGameList = () => (dispatch, getState) => {

    fetchGameList((data) => dispatch({
        type: GET_GAME_LIST,
        payload: data
    }))


};

export default {
    getGameList
}