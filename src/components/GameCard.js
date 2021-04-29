import React, { useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap'
import ErrorBoundary from './ErrorBoundary'
import '../assets/gameList.scss';

const GameCard = (props) => {
    const { item, objkey, addToWishList } = props;
    return (
        <ErrorBoundary>
            <div>
                <img className="gameCover" src={item.cover} />
                <Button
                    className='gameBtn'
                    onClick={() => { addToWishList({ item, objkey }) }}
                >Add to List</Button>
                <span className='info'>{item?.name || ' '}</span>
                <span className='info'>{`${item?.price || '0'} rub.`}</span>
            </div>
        </ErrorBoundary>

    )
}

export default GameCard;