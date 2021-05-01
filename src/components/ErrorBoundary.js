import React, { Component, memo } from 'react';
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
        console.log('getDerivedStateFromError', error);
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
              noCover
            )
        }
        return this.props.children;
    }
}

// const youMastReRenderAlways = (prevProps, nextProps) => {
//     console.log(prevProps, nextProps)
//     if(JSON.stringify(prevProps.children) !== JSON.stringify(nextProps.children)){
//         return false
//     }
//     return true
// }

export default ErrorBoundary;