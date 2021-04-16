import gameStoreService from '../service/gameStoreService';

const SCOPE = 'gameList/';

export const GET_GAME_LIST = `${SCOPE}GET_GAME_LIST`;
export const ADD_TO_WISH_LIST = `${SCOPE}ADD_TO_WISH_LIST`;

const getGameList = () => ({
    type: GET_GAME_LIST,
    payload: gameStoreService.getGameList()
    // payload: axios.get('https://gist.githubusercontent.com/Greyewi/e6cfa49e478387a7b878e4430e1f4223/raw/d045a5c2c977cf05d05ae1a4625762e69cc891c8/game_list.json')
    // .then(res => {
    //   if (!res.ok) throw new Error('An error occurred.');
    //   return res;
    // })
    // .then(res => {return res.json()})
    // .catch(err => console.warn(err))
});

export default {
    getGameList
}