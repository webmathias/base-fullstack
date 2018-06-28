import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchList } from './moduleActions'

class Module extends Component {
    componentDidMount() {
        const { fetchList } = this.props
        fetchList()
    }
    render() {
        const { list } = this.props
        return <div>
            LIST
            <br />
            {list.map((item, index) => (
                <div key={index}>{item.name} : {item.type}</div>
            ))}
        </div>
    }
}
Module.propTypes={
    list: PropTypes.array.isRequired,
    fetchList: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    list: state.module.list
})
const mapDispachtoProps = {
    fetchList
}
export default connect(mapStateToProps, mapDispachtoProps)(Module)