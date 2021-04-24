import { connect } from 'react-redux'
import { errorMsgSelector, gameStoreDataSelector, getGameList, isFetchLoadingSelector } from '../modules/game-list';
import { addToWishList } from '../modules/wish-list';
import '../assets/gameList.scss'
import Gamelist from "../components/GameList"

const mapStateToProps = state => ({
  errorMsg: errorMsgSelector(state),
  gameStoreData: gameStoreDataSelector(state),
  isFetchLoading: isFetchLoadingSelector(state)
});

export default connect(mapStateToProps, {
  getGameList,
  addToWishList
})(Gamelist)