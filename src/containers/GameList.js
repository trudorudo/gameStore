import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { errorMsgSelector, gameStoreDataSelector, getGameList, isFetchLoadingSelector } from '../modules/game-list';
import { addToWishList } from '../modules/wish-list';
import GameCard from '../components/GameCard'
import '../assets/gameList.scss'
import { Spinner } from 'react-bootstrap'

class GameList extends Component {
  constructor(props) {
    super(props)
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators(getGameList, addToWishList, dispatch);
    this.getGameStoreData = this.getGameStoreData.bind(this)
    this.addToWishList = this.addToWishList.bind(this)
  };

  componentDidMount() {
    this.getGameStoreData();
  }

  getGameStoreData() {
    let { dispatch } = this.props;
    let action = getGameList();
    dispatch(action)
  }

  addToWishList(item) {
    let { dispatch } = this.props;
    let action = addToWishList(item);
    dispatch(action)
  }

  render() {
    const { gameStoreData, errorMsg, isFetchLoading } = this.props
    return (
      <div className="gameListContainer">
        <div class="container">
          <div class="row">
            {
              isFetchLoading ? <Spinner animation="border" /> : gameStoreData && Object.keys(gameStoreData).map((item, key) => (
                <div class="col-sm">
                  <GameCard
                    item={gameStoreData[item]}
                    objkey={key}
                    addToWishList={this.addToWishList}
                  />
                </div>
              )) || errorMsg
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errorMsg: errorMsgSelector(state),
  gameStoreData: gameStoreDataSelector(state),
  isFetchLoading: isFetchLoadingSelector(state)
});

export default connect(mapStateToProps)(GameList)