import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { goto } from '../modules/app/appReducers'

class MenuApp extends Component {
    static propTypes = {
        changeUrl: PropTypes.func,
        url: PropTypes.string,
        routes: PropTypes.array
    }
    constructor(props) {
        super(props)
        this.goto = this.goto.bind(this)
    }

    goto(url) {
        this.props.changeUrl(url)
    }

    render() {
        const { url = '', routes } = this.props
        return <div className="list-group">
            <div onClick={() => this.goto('/')} className={'list-group-item ' + (url == '/' ? 'active' : '')}>
                Home
            </div>
            {
                routes.map((route, index) => {
                    if (route.title)
                        return (
                            <div onClick={() => this.goto(route.path)}
                                className={'list-group-item ' + (url.startsWith(route.path) ? 'active' : '')}
                                key={index}>
                                {route.title}
                            </div>)
                    return null
                })
            }
        </div>
    }
}
const mapStateToProps = (state) => ({
    url: state.menu.currentUrl
})
export default connect(mapStateToProps)(MenuApp)