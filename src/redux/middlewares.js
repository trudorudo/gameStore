import axios from "axios"
import {FETCH_ERROR, FETCH_LOADING, GET_GAME_LIST_REQUEST, GET_GAME_LIST_REVERSE_REQUEST} from '../modules/game-list'

const endpointsMap = {
  [GET_GAME_LIST_REQUEST] : {
    url: 'https://gist.githubusercontent.com/Greyewi/e6cfa49e478387a7b878e4430e1f4223/raw/d045a5c2c977cf05d05ae1a4625762e69cc891c8/game_list.json',
    selector: ({data}) => data,
    method: 'GET'
  },
  [GET_GAME_LIST_REVERSE_REQUEST] : {
    url: 'https://gist.githubusercontent.com/Greyewi/e6cfa49e478387a7b878e4430e1f4223/raw/d045a5c2c977cf05d05ae1a4625762e69cc891c8/game_list.json',
    selector: ({data}) => Object.keys(data).reverse().map(key => data[key]),
    method: 'GET'
  },
}

export const fetchMiddleware = (storeApi) => (next) => (actions) => {

  if(endpointsMap[actions.type]) {
    const {selector, ...endpoint} = endpointsMap[actions.type]
    const {dispatch} = storeApi
    dispatch({
      type: FETCH_LOADING,
      payload: true
    })

    axios({...endpoint})
      .then((data) => {
        dispatch({
          type: actions.type.replace('REQUEST', 'SUCCESS'),
          payload: selector(data)
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
  }

  return next(actions)
}