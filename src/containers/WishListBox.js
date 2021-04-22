import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { wishListDataSelector, removeFromWishListAction } from '../modules/wish-list'
import '../assets/wishList.scss';
import WishList from '../components/WishList';
import Total from '../components/Total';

class WishListBox extends Component {
    constructor(props) {
        super(props);
        const { dispatch } = props;
        this.boundActionCreators = bindActionCreators(removeFromWishListAction, dispatch);
        
        this.removeFromList = this.removeFromList.bind(this);
    };

    removeFromList(item) {
        let { dispatch } = this.props;
        let action = removeFromWishListAction(item);
        dispatch(action);
    }

    render() {
        const { wishListData } = this.props;
        return (
            <div className="wishListContainer">
                <span>WISH LIST: </span>
                <div className='wishListDiv'>
                    {
                        wishListData?.map(game => (
                            <WishList
                                item={game}
                                removeFromList={this.removeFromList}
                            />
                        ))
                    }
                </div>

                <Total wishListData={wishListData} />

            </div>
        )
    }
}

const mapStateToProps = state => ({
    wishListData: wishListDataSelector(state)
});

// const mapDispathToProps = dispatch => ({
//     actions: bindActionCreators(
//         {
//             ...wishListActions
//         },
//         dispatch
//     )
// })

export default connect(mapStateToProps)(WishListBox);