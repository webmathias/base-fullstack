import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Loader.css'
export default class Loader extends Component {
    static propTypes = {
        isLoading: PropTypes.bool,
        error: PropTypes.string,
        pastDelay: PropTypes.bool,
        retry: PropTypes.func
    }
    render() {
        const { error, pastDelay, retry } = this.props
        if (error)
            return <div>Error! <button onClick={retry}>Retry</button></div>
        else if (pastDelay)
            return <div className="loader"></div>
        return null
    }
}