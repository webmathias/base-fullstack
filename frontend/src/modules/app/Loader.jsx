import React, { Component } from 'react';
import './Loader.css';
export default class Loader extends Component {
    render() {
        const { isLoading, error, pastDelay, retry } = this.props;
        if (error)
            return <div>Error! <button onClick={retry}>Retry</button></div>;
        else if (pastDelay)
            return <div className="loader"></div>
        return null
    }
}