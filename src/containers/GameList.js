import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import gameListActions from '../actions/gameListActions';
import '../assets/gameList.scss';


class GameList extends Component {
    constructor(props) {
        super(props);
        this.getGameStoreData = this.getGameStoreData.bind(this);
    };

    componentDidMount() {
        this.getGameStoreData();
    }

    getGameStoreData() {
        this.props.actions.getGameList();
    }

    render() {
        const { gameStoreData } = this.props;
        return (
            <div className="gameListContainer">
                <div class="container">
                    <div class="row">
                        {
                            Object.keys(gameStoreData).map((item, i) => (
                                <div class="col-sm">
                                    <img className="gameCover" src={ gameStoreData[item].cover }/>
                                    <Button className='gameBtn'>Add to List</Button>
                                    <span className='info'>{gameStoreData[item].name}</span>
                                    <span className='info'>{`${gameStoreData[item].price} rub.`}</span>
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
            ...gameListActions
        },
        dispatch
    )
})

export default connect(mapStateToProps, mapDispathToProps)(GameList);