import React, { useMemo } from 'react';

const Total = ({ wishListData }) => {
    const total = useMemo(
        () => wishListData.length > 0 ?
            wishListData?.map(game => !isNaN(game?.price) && game?.price).reduce((a, c) => a + c) :
            '',
        [wishListData]
    )
    return (
        <div>
            Total: {total}
        </div>
    )
}

export default Total;