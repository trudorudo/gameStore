import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../assets/gameList.scss';

const GameCard = (props) => {
    const { item, objkey, addToWishList, removeFromWishListAction } = props;
    const [isWishList, setToWishList] = useState(false);
    return (
        <div className="gameCard">
            <img className="gameCover" src={item.cover} />
            { !isWishList ?
                <Button
                    className='gameBtn'
                    onClick={() => { addToWishList({ item, objkey }); setToWishList(true) }}
                >Add to List</Button> :
                <Button
                    className='gameBtn'
                    onClick={() => { removeFromWishListAction({...item, key:objkey}); setToWishList(false) }}
                >Remove</Button>
            }
            <span className='info'>{item?.name || ' '}</span>
            <span className='info'>{`${item?.price || '0'} rub.`}</span>
        </div>
    )
}

export default GameCard;