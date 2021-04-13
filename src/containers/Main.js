import React, { Component } from 'react';
import '../assets/main.scss';
import GameList from './GameList';
import WishList from './WishList';


class Main extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#737373"
    }
    render() {
        return (
            <div className='main'>
                <GameList />
                <WishList />
            </div>
        );
    }
}

export default Main;