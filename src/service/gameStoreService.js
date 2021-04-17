// import axios from "axios";

export const fetchGameList = (callback) => {
  const url = 'https://gist.githubusercontent.com/Greyewi/e6cfa49e478387a7b878e4430e1f4223/raw/d045a5c2c977cf05d05ae1a4625762e69cc891c8/game_list.json'
  fetch(url)
    .then((response) => response.json())
    .then(data => callback(data))
    .catch((err) => {
      console.log(err.message)
    })
}

export default fetchGameList