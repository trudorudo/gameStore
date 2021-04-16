import React from 'react';

const Total = (props) => {
    const total = props?.wishListData.length > 0 ? props.wishListData?.map(game => game?.price).reduce((a,c) => a+c) : ''
    return (
        <div>
            Total: {total}
        </div>
    )
}

export default Total;