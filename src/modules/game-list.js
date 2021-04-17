import axios from "axios"

/**
  CONSTANTS
*/

export const moduleName = 'game-list'

export const GET_GAME_LIST = `${moduleName}/GET_GAME_LIST`;
export const FETCH_LOADING = `${moduleName}/FETCH_LOADING`;
export const FETCH_ERROR = `${moduleName}/FETCH_ERROR`;

/**
 REDUCER
 */

const initialRecord = {
  gameStoreData: {},
  isFetchLoad: false,
  errorMsg: null
}


export default function gameListReducer(state = initialRecord, action = {}) {
  switch(action.type){
    case GET_GAME_LIST:
      return {
        ...state,
        gameStoreData: action.payload
      }
    case FETCH_LOADING:
      return {
        ...state,
        isFetchLoad: action.payload
      }
    case FETCH_ERROR:
      return {
        ...state,
        errorMsg: action.payload
      }
    default:
      return state;
  }
}

/**
 ACTION CREATORS
 */

export const getGameList = () => (dispatch) => {

  dispatch({
    type: FETCH_LOADING,
    payload: true
  })

  const url = 'https://gist.githubusercontent.com/Greyewi/e6cfa49e478387a7b878e4430e1f4223/raw/d045a5c2c977cf05d05ae1a4625762e69cc891c8/game_list.json'
  axios({url: url, method: 'GET'})
    .then(({data}) => {
      dispatch({
        type: GET_GAME_LIST,
        payload: data
      })
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ERROR,
        payload: err.message
      })
    })
    .finally(() => {
      dispatch({
        type: FETCH_LOADING,
        payload: false
      })
    })

};