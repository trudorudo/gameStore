import React from 'react';
import { Button } from 'react-bootstrap';
import '../assets/wishList.scss';

const WishList = (props) => {
    const { item = {}, removeFromList } = props;
    return (
        <div >
            <span className='wishListItem'>{item?.name}</span>
            <Button
                className='removeBtn'
                onClick={() => { removeFromList(item) }}
            >X</Button>
        </div>
    )
}

export default WishList;