import React, { useEffect, useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import GameCard from './GameCard';
import '../assets/gameList.scss';

const GameList = ({ isFetchLoading, gameStoreData, addToWishList, errorMsg, getGameList, removeFromWishListAction, wishListData }) => {

    useEffect(() => {
        getGameList();

        return () => {
            console.log("componentWillUnmount")
        }
    }, [getGameList])

    useEffect(() => {
        console.log("componentDidUpdate")
    }, [gameStoreData])

    let [color, setColor] = useState("#ffffff");
    return (
        <div className="gameListContainer">
            {
                isFetchLoading ?
                    <BeatLoader size={100} color={color} /> : gameStoreData && Object.keys(gameStoreData).map((item, key) => (
                        <div key={key}>
                                <GameCard
                                    wishListData={wishListData}
                                    isWishList={!!wishListData.find(f => f.key === gameStoreData[item].name + key)}
                                    item={gameStoreData[item]}
                                    objkey={gameStoreData[item].name + key}
                                    addToWishList={addToWishList}
                                    removeFromWishListAction={removeFromWishListAction}
                                />
                            </div>
                            )) || errorMsg
                    }
                        </div>
                    )
}

export default GameList ;