import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap'
import GameCard from './GameCard';
import ErrorBoundary from './ErrorBoundary'
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

    return (
        <div className="gameListContainer">
            <div className="container">
                <div className="row">
                    {
                        isFetchLoading ?
                            <Spinner animation="border" /> : gameStoreData && Object.keys(gameStoreData).map((item, key) => (
                                <div className="col-sm" key={key}>
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
            </div>
        </div>
    )
}

export default GameList ;