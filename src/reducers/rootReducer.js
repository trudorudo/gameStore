import { combineReducers } from 'redux';
import gameListReducer from '../reducers/gameListReducer';
import wishListReducer from '../reducers/wishListReducer';



const rootReducer = combineReducers({
    gameListReducer,
    wishListReducer
});

export default rootReducer;