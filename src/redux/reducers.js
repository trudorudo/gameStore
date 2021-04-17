import { combineReducers } from 'redux';
import gameListReducer, {moduleName as gameListModule} from '../modules/game-list';
import wishListReducer from '../reducers/wishListReducer';


const rootReducer = combineReducers({
  [gameListModule]: gameListReducer,
  wishListReducer
});

export default rootReducer;