import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap'
import GameCard from './GameCard';
import '../assets/gameList.scss';

const GameList = ({ isFetchLoading, gameStoreData, addToWishList, errorMsg, getGameList }) => {

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
                                        item={gameStoreData[item]}
                                        objkey={key}
                                        addToWishList={addToWishList}
                                    />
                                </div>
                            )) || errorMsg
                    }
                </div>
            </div>
        </div>
    )
}


export default GameList;

// Notes: 
// useMemo, useEffect 

// <img  