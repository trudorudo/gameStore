import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import gameListActions from '../actions/gameListActions';
import wishListActions from '../actions/wishListActions';
import GameCard from '../components/GameCard';
import '../assets/gameList.scss';


class GameList extends Component {
    constructor(props) {
        super(props);
        this.getGameStoreData = this.getGameStoreData.bind(this);
        this.addToWishList = this.addToWishList.bind(this);
    };

    componentDidMount() {
        this.getGameStoreData();
    }

    getGameStoreData() {
        this.props.actions.getGameList();
    }

    addToWishList(item) {
        this.props.actions.addToWishList(item);
    }

    render() {
        const { gameStoreData } = this.props;
        return (
            <div className="gameListContainer">
                <div class="container">
                    <div class="row">
                        {
                            gameStoreData && Object.keys(gameStoreData).map((item, key) => (
                                <div class="col-sm">
                                    <GameCard
                                        item={ gameStoreData[item] }
                                        objkey={ key }
                                        addToWishList={ this.addToWishList }
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {
        gameStoreData
    } = state.gameListReducer;
    return {
        gameStoreData
    }
};

const mapDispathToProps = dispatch => ({
    actions: bindActionCreators(
        {
            ...gameListActions,
            ...wishListActions
        },
        dispatch
    )
})

export default connect(mapStateToProps, mapDispathToProps)(GameList);