import React, {memo, Suspense, useCallback, useMemo} from 'react'
import {Button} from 'react-bootstrap'
import '../assets/gameList.scss'
import noCover from '../assets/nocover.png'
import {Img} from 'react-image'

function MyImageComponent({src}) {
  const url = src && "https" + src.slice(4)
  return <div>
    <Img
      src={url}
      container={() => {
        return <img className="gameCover" src={url}/>
      }}
      loader={<div>Loading...</div>}
      unloader={<img className="gameCover" src={noCover}/>}
    />
  </div>
}

const GameCard = (props) => {
  const {item, objkey, addToWishList, removeFromWishListAction, isWishList} = props

  const onClickBtn = useCallback((item, objkey) => {
    !isWishList ? addToWishList({item, objkey}) : removeFromWishListAction({...item, key: objkey})
  }, [isWishList, addToWishList, removeFromWishListAction])

  const btnText = useMemo(() => !isWishList ? "Add to List" : 'Remove', [isWishList])
  return (
    <div className="gameCard">
      {/*<img className="gameCover" src={item.cover} />*/}

        <MyImageComponent src={item.cover}/>

      <Button
        className='gameBtn'
        onClick={() => onClickBtn(item, objkey)}
      >
        {btnText}
      </Button>

      <span className='info'>{item?.name || ' '}</span>
      <span className='info'>{`${item?.price || '0'} rub.`}</span>
    </div>
  )

}

export default GameCard