import { connect } from 'react-redux';
import { wishListDataSelector, removeFromWishListAction } from '../modules/wish-list'
import '../assets/wishList.scss';
import WishList from '../components/WishList';

const mapStateToProps = state => ({
    wishListData: wishListDataSelector(state)
});

export default connect(mapStateToProps,{
    removeFromWishListAction
})(WishList);