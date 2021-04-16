import React from 'react';
import { Button } from 'react-bootstrap';
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

export default GameCard;