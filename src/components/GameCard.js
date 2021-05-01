import React, {memo, useCallback, useMemo} from 'react'
import { Button } from 'react-bootstrap';
import '../assets/gameList.scss';
import noCover from '../assets/nocover.png';


const GameCard = (props) => {
    const { item, objkey, addToWishList, removeFromWishListAction, isWishList } = props;

    const onClickBtn = useCallback((item, objkey) => {
      !isWishList ? addToWishList({ item, objkey }) : removeFromWishListAction({...item, key: objkey})
    }, [isWishList, addToWishList, removeFromWishListAction])

    const btnText = useMemo(() => !isWishList ? "Add to List" : 'Remove', [isWishList])

    try{
      return (
        <div className="gameCard">
            <img className="gameCover" src={item.cover} />
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
    } catch(err){
      console.log(err)
      return (
        <div className="gameCard">
            <img className="gameCover" src={noCover} />
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
}

const noWishList = (prevProps, nextProps) => {

  if(prevProps.wishListData.length !== nextProps.wishListData.length){
    if(!!nextProps.wishListData.find(f => f.key === nextProps.objkey)){
      return false
    }

    if(prevProps.wishListData.find(f => f.key === prevProps.objkey) && !nextProps.wishListData.find(f => f.key === nextProps.objkey)){
      return false
    }

    return true
  }

  return false
}

export default memo(GameCard, noWishList);