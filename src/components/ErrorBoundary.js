import React, { Component } from 'react';
import '../assets/gameList.scss';
import noCover from '../assets/nocover.png';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });
        console.log('We did catch', error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <img className="gameCover" src={noCover} />
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;