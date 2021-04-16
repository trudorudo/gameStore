import { GET_GAME_LIST } from '../actions/gameListActions';

const initialState = {
    gameStoreData: {}
}

const gameListReducer = (state = initialState, action={}) => {
    switch(action.type){
        case `${GET_GAME_LIST}`:
            return {
                ...state,
                gameStoreData: action.payload
            }
        default:
            return state;
    }
}


export default gameListReducer;