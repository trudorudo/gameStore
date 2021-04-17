import React, {Component} from 'react'
import {connect} from 'react-redux'
import {errorMsgSelector, gameStoreDataSelector, getGameList, isFetchLoadingSelector} from '../modules/game-list'
import GameCard from '../components/GameCard'
import '../assets/gameList.scss'


class GameList extends Component {
  constructor(props) {
    super(props)
    this.getGameStoreData = this.getGameStoreData.bind(this)
    this.addToWishList = this.addToWishList.bind(this)
  };

  componentDidMount() {
    this.getGameStoreData()
  }

  getGameStoreData() {
    this.props.getGameList()
  }

  addToWishList(item) {
    this.props.actions.addToWishList(item)
  }

  render() {
    const {gameStoreData} = this.props
    return (
      <div className="gameListContainer">
        <div class="container">
          <div class="row">
            {
              gameStoreData && Object.keys(gameStoreData).map((item, key) => (
                <div class="col-sm">
                  <GameCard
                    item={gameStoreData[item]}
                    objkey={key}
                    addToWishList={this.addToWishList}
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

const mapStateToProps = state => ({
  errorMsg: errorMsgSelector(state),
  gameStoreData: gameStoreDataSelector(state),
  isFetchLoading: isFetchLoadingSelector(state)
})

export default connect(mapStateToProps, {getGameList})(GameList)