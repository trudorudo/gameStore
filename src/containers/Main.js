import React, { Component } from 'react';
import '../assets/main.scss';
import GameList from './GameList';
import WishListBox from './WishListBox';


class Main extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#737373"
    }
    render() {
        return (
            <div className='main'>
                <GameList />
                <WishListBox />
            </div>
        );
    }
}

export default Main;