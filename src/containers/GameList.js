import { connect } from 'react-redux'
import { errorMsgSelector, gameStoreDataSelector, getGameList, isFetchLoadingSelector } from '../modules/game-list';
import { addToWishList, removeFromWishListAction, wishListDataSelector } from '../modules/wish-list';
import GameList from '../components/GameList'
import '../assets/gameList.scss'

const mapStateToProps = state => ({
  errorMsg: errorMsgSelector(state),
  wishListData: wishListDataSelector(state),
  gameStoreData: gameStoreDataSelector(state),
  isFetchLoading: isFetchLoadingSelector(state)
});

export default connect(mapStateToProps, {
  getGameList,
  addToWishList,
  removeFromWishListAction
})(GameList)