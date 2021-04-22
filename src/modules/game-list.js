import { createSelector } from "reselect"

/**
  CONSTANTS
*/

export const moduleName = 'game-list'

export const GET_GAME_LIST_REQUEST = `${moduleName}/GET_GAME_LIST_REQUEST`;
export const GET_GAME_LIST_SUCCESS = `${moduleName}/GET_GAME_LIST_SUCCESS`;
export const FETCH_LOADING = `${moduleName}/FETCH_LOADING`;
export const FETCH_ERROR = `${moduleName}/FETCH_ERROR`;

/**
 REDUCER
 */

const initialRecord = {
  gameStoreData: null,
  isFetchLoading: false,
  errorMsg: null
}


export default function gameListReducer(state = initialRecord, action = {}) {
  switch(action.type){
    case GET_GAME_LIST_SUCCESS:
      return Object.assign({}, state, {
        gameStoreData: action.payload
      })
    case FETCH_LOADING:
      return Object.assign({}, state, {
        isFetchLoading: action.payload
      })
    case FETCH_ERROR:
      return Object.assign({}, state, {
        errorMsg: action.payload
      })
    default:
      return state;
  }
}

/**
 SELECTORS
 */

export const moduleSelector = state => state[moduleName]
export const gameStoreDataSelector = createSelector(moduleSelector, state => state.gameStoreData)
export const gameStoreDataArraySelector = createSelector(moduleSelector, state => {
  //
  return Object.keys(state.gameStoreData).map(item => state.gameStoreData[item])
})
export const isFetchLoadingSelector = createSelector(moduleSelector, state => state.isFetchLoading)
export const errorMsgSelector = createSelector(moduleSelector, state => state.errorMsg)


/**
 ACTION CREATORS
 */

export const getGameList = () => ({
  type: GET_GAME_LIST_REQUEST
});