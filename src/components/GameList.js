import React, {useEffect} from 'react';
import {Button, Spinner} from 'react-bootstrap'
import '../assets/gameList.scss';

const GameCard = (props) => {
    const { item, objkey, addToWishList } = props;
    return (
        <div>
            <img className="gameCover" src={item.cover} />
            <Button
                className='gameBtn'
                onClick={() => { addToWishList({ item, objkey }) }}
            >Add to List</Button>
            <span className='info'>{item.name}</span>
            <span className='info'>{`${item.price} rub.`}</span>
        </div>
    )
}

const Gamelist = ({isFetchLoading, gameStoreData, addToWishList, errorMsg, getGameList}) => {

  useEffect(() => {
    getGameList() // componentDidMount

    return () => {
      console.log('componentWillUnmount')
    }
  }, [getGameList])

  useEffect(() => {
    console.log('componentDidUpdate')
  }, [gameStoreData])


  console.log('render')
  return (
    <div className="gameListContainer">
      <div className="container">
        <div className="row">
          {
            isFetchLoading ?
              <Spinner animation="border"/> : gameStoreData && Object.keys(gameStoreData).map((item, key) => (
              <div className="col-sm" key={key}>
                <GameCard
                  item={gameStoreData[item]}
                  objkey={key}
                  addToWishList={addToWishList}
                />
              </div>
            )) || errorMsg
          }
        </div>
      </div>
    </div>
  )
}

export default Gamelist