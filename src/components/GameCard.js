import React, {memo, useCallback, useMemo} from 'react'
import { Button } from 'react-bootstrap';
import '../assets/gameList.scss';
import ErrorBoundary from "./ErrorBoundary"



const GameCard = (props) => {
    const { item, objkey, addToWishList, removeFromWishListAction, isWishList } = props;

    const onClickBtn = useCallback((item, objkey) => {
      !isWishList ? addToWishList({ item, objkey }) : removeFromWishListAction({...item, key: objkey})
    }, [isWishList, addToWishList, removeFromWishListAction])

    const btnText = useMemo(() => !isWishList ? "Add to List" : 'Remove', [isWishList])

    return (
        <div className="gameCard">
            <ErrorBoundary image={item.cover}>
                <img className="gameCover" src={item.cover} />
            </ErrorBoundary>
            <Button
              className='gameBtn'
              onClick={() => onClickBtn(item, objkey)}
              disabled={!item.price}
            >
              {btnText}
            </Button>

            <span className='info'>{item?.name || ' '}</span>
            <span className='info'>{`${item?.price || '0'} rub.`}</span>
        </div>
    )
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