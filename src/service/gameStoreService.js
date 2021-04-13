// import axios from "axios";

import { Provider } from "react-redux";

    const gameStoreService = {
        getGameList: () => {
            const url = 'https://gist.githubusercontent.com/Greyewi/e6cfa49e478387a7b878e4430e1f4223/raw/d045a5c2c977cf05d05ae1a4625762e69cc891c8/game_list.json';
            return fetch(`${url}`)
                .then((response) => {return response.json()})
                // .then((data) => {
                //     console.log(data)
                //     return data;
                // })
                .catch((err) => {
                    return Promise.reject(console.error())
                })
        }
    }

export default gameStoreService;