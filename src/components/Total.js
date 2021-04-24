import React from 'react';
import {useMemo} from 'react'


const Total = ({wishListData}) => {
    const total = useMemo(
      () => wishListData.length > 0 ?
        wishListData?.map(game => game?.price).reduce((a,c) => a+c) :
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