import React from 'react';
import WishListItem from '../components/wishListItem';
import Total from '../components/Total';
import '../assets/wishList.scss';

const WishList = (props) => {
    const { wishListData, removeFromWishListAction } = props;
    return (
        <div className="wishListContainer">
            <span>WISH LIST: </span>
            <div className='wishListDiv'>
                {
                    wishListData?.map(game => (
                        <WishListItem
                            item={game}
                            removeFromList={removeFromWishListAction}
                        />
                    ))
                }
            </div>

            <Total wishListData={wishListData} />

        </div>
    )
}

export default WishList;