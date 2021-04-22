import { combineReducers } from 'redux';
import gameListReducer, {moduleName as gameListModule} from '../modules/game-list';
import wishListReducer, {moduleName as wishListModule}  from '../modules/wish-list';


const rootReducer = combineReducers({
  [gameListModule]: gameListReducer,
  [wishListModule]: wishListReducer,
});

export default rootReducer;