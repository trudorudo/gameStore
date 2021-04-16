import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import wishListActions from '../actions/wishListActions';
import '../assets/wishList.scss';
import gameStoreService from '../service/gameStoreService';
import WishList from '../components/WishList';
import Total from '../components/Total';

class WishListBox extends Component {
    constructor(props) {
        super(props);
        this.removeFromList = this.removeFromList.bind(this);
    };

    removeFromList(item){
        this.props.actions.removeFromWishList(item)
    }
    
    render (){
        const { wishListData } = this.props;
        return (
            <div className="wishListContainer">
                <span>WISH LIST: </span>
                <div className='wishListDiv'>
                { 
                    wishListData?.map(game => (
                        <WishList 
                            item={ game }
                            removeFromList={ this.removeFromList }
                        />
                    ))
                }
                </div>

                <Total wishListData={ wishListData }/>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {
        wishListData
    } = state.wishListReducer;
    return {
        wishListData
    }
};

const mapDispathToProps = dispatch => ({
    actions: bindActionCreators(
        {
            ...wishListActions
        },
        dispatch
    )
})

export default connect(mapStateToProps, mapDispathToProps)(WishListBox);