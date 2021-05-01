import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap'
import GameCard from './GameCard';
import ErrorBoundary from './ErrorBoundary'
import '../assets/gameList.scss';

const GameList = ({ isFetchLoading, gameStoreData, addToWishList, errorMsg, getGameList, removeFromWishListAction }) => {

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
                                    <ErrorBoundary>
                                        <GameCard
                                            item={gameStoreData[item]}
                                            objkey={gameStoreData[item].name + key}
                                            addToWishList={addToWishList}
                                            removeFromWishListAction={removeFromWishListAction}
                                        />
                                    </ErrorBoundary>
                                </div>
                            )) || errorMsg
                    }
                </div>
            </div>
        </div>
    )
}


export default GameList;